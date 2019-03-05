import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'


class Arepa extends Component {
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
    if (direction == 'vertical' || this.state.isPage){
      return {flexDirection : 'column'}
    }
    else {
      return {flexDirection : 'row'}
    }
  }

  getStyle() {
    return {
      ...Arepa.styles.default,
      ...this.getDirectionStyle(this.props.direction),
      ...this.props.style
    }
  }

  makeChildren() {
    let {
      children,
      direction
    } = this.props
    //check for arrays and arrays with arrays
    var toReturn =
      !Array.isArray(children) ?
      children :
      children.map(child => {
        if (Array.isArray(child)) {
          //console.log('copy',<Arepa direction={'horizontal'}>{child}</Arepa>)
          return <Arepa direction={'horizontal'}>{child}</Arepa>
        }
        else {
          console.log('marginal', child)
          return child
        }
      })

    //console.log('returning', toReturn)
    return toReturn
  }

  render(){
    return (
      <View style={this.getStyle()}>{this.makeChildren()}</View>
    )
  }
}

Arepa.styles = StyleSheet.create({
  default: {
    flexDirection: 'row'
  }
})

export default Arepa
