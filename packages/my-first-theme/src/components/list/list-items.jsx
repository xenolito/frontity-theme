import React from "react"
import { useArchiveInfiniteScroll } from "@frontity/hooks"
import { connect, styled } from "frontity"
import ListPage from "./list-page"
import Loading from "../Loading"

const ListItems = ({ state }) => {
  const { pages, isFetching, isLimit, isError, fetchNext } =
    useArchiveInfiniteScroll({ limit: state.theme.infiniteScrollPagesLimit })
  // console.log(posts)

  return (
    <div>
      {pages.map(({ key, link, isLast, Wrapper }) => (
        <Wrapper key={key}>
          <ListPage link={link} />
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

export default connect(ListItems)

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
