import React from "react"
import { connect, styled } from "frontity"
import Link from "@frontity/components/link"

const List = ({ state, actions, libraries }) => {
  const data = state.source.get(state.router.link)
  const Html2React = libraries.html2react.Component

  // console.log(state.source.attachment)

  return (
    <>
      <Items>
        {data.items.map((item) => {
          const post = state.source[item.type][item.id]
          const featured_image_obj =
            state.source.attachment[post.featured_media]

          const feat_img_url = featured_image_obj
            ? featured_image_obj.media_details.sizes.large?.source_url ||
              featured_image_obj.source_url
            : null

          return (
            <ListCard key={item.id} className="archive-list-item">
              <figure>
                {feat_img_url ? <img src={feat_img_url} /> : <ImgNotFound />}
              </figure>
              <Link key={item.id} link={post.link}>
                {post.title.rendered}
              </Link>
              <Html2React html={post.excerpt.rendered} />
            </ListCard>
          )
        })}
        <PrevNextNav>
          {data.previous && (
            <button
              onClick={() => {
                actions.router.set(data.previous)
              }}
            >
              &lt; Previous
            </button>
          )}
          {data.next && (
            <button
              onClick={() => {
                actions.router.set(data.next)
              }}
            >
              Next &gt;
            </button>
          )}
        </PrevNextNav>
      </Items>
    </>
  )
}

export default connect(List)

const Items = styled.div``

const ListCard = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  grid-template-rows: min-content 1fr;
  grid-gap: 1rem;
  padding-bottom: 2rem;

  * {
    justify-content: flex-start;
    align-items: flex-start;
  }

  figure {
    grid-row-start: 1;
    grid-row-end: 3;

    img {
      max-height: 250px;
      object-fit: cover;
      width: 100%;
    }
  }

  & > a {
    display: flex;
    margin: 0;
    font-size: 1.2em;
    color: steelblue;
    text-decoration: none;
  }
`

const ImgNotFound = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  min-height: 150px;
  background-color: #00000055;
`

const PrevNextNav = styled.div`
  padding-top: 1.5em;

  & > button {
    background: #eee;
    text-decoration: none;
    padding: 0.5em 1em;
    color: #888;
    border: 1px solid #aaa;
    font-size: large.8em;
    margin-right: 2em;

    :hover {
      cursor: pointer;
    }
  }
`
