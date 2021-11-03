import React from "react"
import { usePostTypeInfiniteScroll } from "@frontity/hooks"
import { connect, styled } from "frontity"
import Post from "./post"
import Loading from "../Loading"

const PostList = ({ state }) => {
  const { posts, isFetching, isLimit, isError, fetchNext } =
    usePostTypeInfiniteScroll({ limit: state.theme.infiniteScrollPostsLimit })
  // console.log(posts)

  return (
    <div>
      {posts.map(({ key, link, isLast, Wrapper }) => (
        <Wrapper key={key}>
          <Post link={link} />
          {!isLast && <hr />}
        </Wrapper>
      ))}
      <Container>
        {isFetching && <Loading />}
        {(isLimit || isError) && (
          <Button onClick={fetchNext}>
            {isError ? "Something failed - Retry" : "Load More"}
          </Button>
        )}
      </Container>
    </div>
  )
}

export default connect(PostList)

const Container = styled.div`
  width: 100%;
  text-align: center;
  margin: 40px;
`

const Button = styled.button`
  background: blue;
  color: white;
  padding: 0.5rem 1rem;
`
