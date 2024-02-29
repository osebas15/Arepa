import React, {Component} from 'react'
import {TextInput} from 'react-native'
import {Shapes} from './ArepaShapes.js'

export default class TextInputArepa extends Component {
  constructor(props){
    super(props)

    this.state = {
      text : ''
    }

    this.onChangeText = this.onChangeText.bind(this)
  }

  onChangeText(text){
    this.setState({
      ...this.state,
      text : text
    }, () => {
      this.props.onChangeText ? this.props.onChangeText(text) : null
    })
  }

  render(){
    let {
      onChangeText,
      ...otherProps
    } = this.props

    return(
      <TextInput {...otherProps} value={this.state.text} onChangeText={this.onChangeText}/>
    )
  }
}
