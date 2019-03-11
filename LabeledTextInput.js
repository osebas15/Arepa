
import Arepa from './arepa.js'
import React from 'react'
import {Text} from 'react-native'

import TextInputArepa from './TextInputArepa.js'

export default function LabeledTextInput(props){

  let {
    text,
    style,
  } = props

  let mainStyle = {
    ...(style && style.main ? style.main : {})
  }

  let textStyle = {
    backgroundColor: 'blue',
    ...(style && style.text ? style.text : {})
  }

  let textInputStyle = {
    backgroundColor: 'red',
    flex: 1,
    ...(style && style.textInput ? style.textInput : {})
  }

  return (
    <Arepa direction='horizontal' style={mainStyle}>
      {[
        <Text style={textStyle}>{text + ': '}</Text>,
        <TextInputArepa style={textInputStyle}/>
      ]}
    </Arepa>
  )
}
