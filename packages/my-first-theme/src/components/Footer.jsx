import React from "react"
import { connect, styled } from "frontity"

const Footer = ({ state }) => {
  return (
    <FooterContainer>
      <div>
        <h1>Footer</h1>
      </div>
    </FooterContainer>
  )
}

export default connect(Footer)

const FooterContainer = styled.div`
  background-color: #343434;
  color: #fff;

  & > div {
    padding: 1em;
    max-width: 800px;
    margin: auto;
  }
`
