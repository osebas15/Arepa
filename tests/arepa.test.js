import React from 'react';
import {View, Text} from 'react-native';
import Arepa from '../arepa.js'

describe('rendering', () => {
  it('renders as a basic view', () => {
    let arepa = new Arepa()
    let expectedValue = (<View></View>)

    expect(arepa.toJSX()).toEqual(expectedValue)
  })

  it('renders child arepas', () => {
    let child = new Arepa(<Text>name</Text>)
    let toTest = new Arepa(child)
    let expectedValue = (<View><Text>name</Text></View>)

    expect(toTest.toJSX()).toEqual(expectedValue)
  })

  it('renders horizontally by default', () => {
    expect(true).toBe(false)
  })

  it('renders verticaly', () => {
    expect(true).toBe(false)
  })

  it('renders stacked', () => {
    expect(true).toBe(false)
  })
})
