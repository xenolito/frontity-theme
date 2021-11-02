import React from "react"
import { connect, styled } from "frontity"
import Link from "@frontity/components/link"

const Header = ({ state, actions }) => {
  const data = state.source.get(state.router.link)
  //   console.log(data)

  return (
    <HeaderContainer isPostType={data.isPostType} isPage={data.isPage}>
      <HeaderContent>
        <h1>Hello from theme root</h1>
        {state.theme.isUrlVisible ? (
          <>
            Current URL: {state.router.link}
            <Button onClick={actions.theme.toggleUrl}>&#x3c; Hide URL</Button>
          </>
        ) : (
          <Button onClick={actions.theme.toggleUrl}>Show URL &#x3e;</Button>
        )}

        <Menu>
          <Link link="/">Home</Link>
          <Link link="/destinations">Destinations</Link>

          <Link link="/about-us">About Us</Link>
        </Menu>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default connect(Header)

const HeaderContainer = styled.header`
  background-color: #e5edee;
  border-bottom-width: 8px;
  border-bottom-style: solid;
  border-bottom-color: ${(props) =>
    props.isPostType ? (props.isPage ? "red" : "green") : "maroon"};

  h1 {
    color: #343434;
  }
`

const HeaderContent = styled.div`
  max-width: 800px;
  padding: 2em 1em;
  margin: auto;
`

const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  margin-top: 1em;
  & > a {
    margin-right: 1em;
    color: steelblue;
    text-decoration: none;
  }
`
const Button = styled.button`
  background: transparent;
  border: none;
  color: #aaa;

  :hover {
    cursor: pointer;
    color: #888;
  }
`
