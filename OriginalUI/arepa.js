import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import ShapeBase from './ArepaShapes.js'


export default class Arepa extends Component {
  constructor(props){
    super(props)
    let isPage =
      Array.isArray(props.children) &&
      props.children.find(child => Array.isArray(child)) != undefined

    this.state = {
      isPage : isPage
    }
  }

  getDirectionStyle(direction) {
    if (direction == 'horizontal'){
      return {flexDirection : 'row'}
    }
    else {
      return {flexDirection : 'column'}
    }
  }

  getStyle() {
    let {
      style
    } = this.props

    console.log('here',style)

    return {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundColor: 'green',
      ...this.getDirectionStyle(this.props.direction),
      ...(style ? style : {})
    }
  }

  makeChildren() {
    let {
      children,
      direction,
      shape
    } = this.props

    //check for arrays, and arrays with arrays
    var toReturn =
      children == null ?
      <View style={{flex: 1}}></View> :
      !Array.isArray(children) ?
      children :
      children.map((child, index) => {
        let shapeStyle = shape ? shape.getStyle(index, children.length) : {}
        if (Array.isArray(child)) {
            return <Arepa direction={'horizontal'} style={shapeStyle}>{child}</Arepa>
        }
        else {
          let {
            style
          } = (child.props ? child.props : {})

          //console.warn('here',child.props, style)
          return React.cloneElement(
            child,
            {
              style: {
                ...shapeStyle,
                ...(style ? style : {})
              }
            }
          )
        }
      })

    console.log('so', toReturn)

    return toReturn
  }

  render(){
    let {
      children,
      direction,
      style,
      ...otherProps
    } = this.props

    return (
      <View {...otherProps} style={this.getStyle()}>{this.makeChildren()}</View>
    )
  }
}
