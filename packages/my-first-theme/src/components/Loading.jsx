import React from "react"
import { styled, keyframes } from "frontity"

const Loading = () => <Spinner />

export default Loading

const spin = keyframes`
    0% {transform: rotate(0deg);}
    100% {transform: rotate(360deg);}
`

const Spinner = styled.div`
  border: 8px solid #eee;
  border-top: 8px solid steelblue;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 1.5s linear infinite;
`
