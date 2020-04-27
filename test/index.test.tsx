import React from 'react'
import { shallow } from 'enzyme'
import styled from 'styled-components'
import App from '~/src/components/App'

const wrapper = shallow(<App />)

test('h1 is rendered', () => {
  const component = wrapper.find('h1')
  expect(component.exists())
})

// styled component

import renderer from 'react-test-renderer'
import 'jest-enzyme'
import 'jest-styled-components'

const StyledDiv = styled.div`color: blue;`

test('Renders a styled component correctly', () => {
  const tree = renderer.create(<StyledDiv />).toJSON()
  expect(tree).toHaveStyleRule('color', 'blue')
})
