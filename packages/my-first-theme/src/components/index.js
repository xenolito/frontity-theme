import React from "react"
import { connect, Global, css, styled, Head } from "frontity"
import Link from "@frontity/components/link"
import Switch from "@frontity/components/switch"
import ListItems from "./list/List-items"
import PostList from "./post/post-list"
import Page from "./Page"
import Loading from "./Loading"
import Error from "./Error"
import Header from "./Header"
import Footer from "./Footer"

const Root = ({ state, actions }) => {
  const data = state.source.get(state.router.link)

  return (
    <>
      <Head>
        <title>My Frontity Theme</title>
        <meta
          name="description"
          content="Based on the Frontity step by step tutorial"
        />
      </Head>
      <Global
        styles={css`
          html {
            font-family: system-ui, Verdana, Arial, sans-serif;
          }
          html,
          body {
            width: 100vw;
            overflow-x: hidden;
          }
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
        `}
      />
      <Header isPostType={data.isPostType} isPage={data.isPage} />
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <ListItems when={data.isArchive} />
          <PostList when={data.isPost} />
          <Page when={data.isPage} />
          <Page when={data.isDestinations} />
          <Error when={data.isError} />
        </Switch>
      </Main>
      <Footer />
    </>
  )
}

export default connect(Root)

const Main = styled.main`
  max-width: 800px;
  padding: 1em;
  margin: auto;

  img {
    max-width: 100%;
  }

  h2 {
    margin: 0.5em 0;
  }

  p {
    line-height: 1.25em;
    margin-bottom: 0.75em;
  }

  figcaption {
    color: #828282;
    font-size: 0.8em;
    margin-bottom: 1em;
  }
`
