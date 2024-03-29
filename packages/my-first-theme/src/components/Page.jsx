import React from "react"
import { connect, Head } from "frontity"

const Page = ({ state, libraries }) => {
  const data = state.source.get(state.router.link)
  const page = state.source[data.type][data.id]

  const Html2React = libraries.html2react.Component

  //   console.log(page)

  return (
    <div>
      <Head>
        <title>{page.title.rendered}</title>
        <meta name="description" content={page.excerpt.rendered} />
      </Head>
      <h1>{page.title.rendered}</h1>
      <Html2React html={page.content.rendered} />
    </div>
  )
}

export default connect(Page)
