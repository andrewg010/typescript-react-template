import React from 'react'
import { shallow } from 'enzyme'
import App from '~/src/components/App'

const wrapper = shallow(<App />)

test('renders', () => {
  const lol = wrapper.find('h1')
  expect(lol.exists())
})