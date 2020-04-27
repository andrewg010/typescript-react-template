import React from 'react'
import { shallow } from 'enzyme'
import App from '~/src/components/App'

const wrapper = shallow(<App />)

test('h1 is rendered', () => {
  const component = wrapper.find('h1')
  expect(component.exists())
})
