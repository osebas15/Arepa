import React from 'react'
import {View, StyleSheet} from 'react-native'

class Arepa{
  views = []

  constructor(views, flavors){
    if (views){
      if (Array.isArray(views)){
        this.views = views
      }
      else {
        this.views = [views]
      }
    }
    this.flavors = flavors
  }

  toJSX = () => {
    let views = this.views.forEach((a) => {
      if (a instanceof Arepa){
        return a.toJSX()
      }
      else {
        return a
      }
    })

    var toReturn = <View></View>
    if (this.views.count == 1){
      toReturn = views[0]
    }
    else if (this.views.count > 1){
      toReturn = <View>{views}</View>
    }
    console.log('cookie',toReturn)
    return toReturn
  }
}

Arepa.styles = StyleSheet.create({
  default: {
    flexDirection: 'row'
  }
})

export default Arepa
