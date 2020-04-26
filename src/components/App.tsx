import React from 'react'
import { hot } from 'react-hot-loader'
import styled from 'styled-components'

const StyledComponent = styled.h3`
  color: green;
`

const App = () => {
  return (
  <div>
    <h1>Hello World!</h1>
    <StyledComponent>Styled components work nicely</StyledComponent>
  </div>
  )
}

export default hot(module)(App)
