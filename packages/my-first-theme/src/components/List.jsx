import React from "react"
import { connect, styled } from "frontity"
import Link from "@frontity/components/link"

const List = ({ state, actions, libraries }) => {
  const data = state.source.get(state.router.link)
  const Html2React = libraries.html2react.Component

  console.log(data)

  return (
    <>
      <Items>
        {data.items.map((item) => {
          const post = state.source[item.type][item.id]
          return (
            <div key={item.id} className="archive-list-item">
              <Link key={item.id} link={post.link}>
                {post.title.rendered}
                <br />
              </Link>
              <Html2React html={post.excerpt.rendered} />
            </div>
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

const Items = styled.div`
  .archive-list-item {
    padding-bottom: 0.5rem;

    & > a {
      display: block;
      margin: 6px 0;
      font-size: 1.2em;
      color: steelblue;
      text-decoration: none;
    }
  }
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
