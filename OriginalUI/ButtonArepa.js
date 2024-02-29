import React from 'react'
import Arepa from './arepa.js'
import {Shapes} from './ArepaShapes.js'
import {TouchableHighlight, Text} from 'react-native'

export default function ButtonArepa(props){
  let {
    text,
    style,
    ...otherProps
  } = props

  let stylizedProps = {
    style : {
      alignItems : 'center',
      ...style
    },
    ...otherProps
  }

  return (
    <TouchableHighlight {...stylizedProps}>
      <Text>
        {text}
      </Text>
    </TouchableHighlight>
  )
}
