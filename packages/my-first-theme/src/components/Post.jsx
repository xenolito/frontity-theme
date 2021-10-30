import React from "react"
import { connect, styled, Head } from "frontity"
import dayjs from "dayjs"

const Post = ({ state, libraries }) => {
  const data = state.source.get(state.router.link)
  const post = state.source[data.type][data.id]
  const author = state.source.author[post.author]
  const formattedDate = dayjs(post.date).format("DD/MM/YYYY")
  const Html2React = libraries.html2react.Component

  //   console.log(data)

  return (
    <div>
      <Head>
        <title>{post.title.rendered}</title>
        <meta name="description" content={post.excerpt.rendered} />
      </Head>
      <h1>{post.title.rendered}</h1>
      <PostInfo>
        <p>Posted: {formattedDate}</p>
        <p>Autor: {author.name}</p>
      </PostInfo>

      <Html2React html={post.content.rendered} />
    </div>
  )
}

export default connect(Post)

const PostInfo = styled.div`
  background-image: linear-gradient() to right, #f4f4f4, #fff;
  margin-bottom: 1em;
  padding: 0.5em;
  border-left: 4px solid lightseagreen;
  font-size: 0.8em;
  margin-top: 0.5rem;

  & p {
    margin: 0;
  }
`
