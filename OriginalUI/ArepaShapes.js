


export default class ShapeBase {
  constructor(name, styles, getStyle){

    this.name = name
    this.styles = styles
    this.getStyle = getStyle ?
      getStyle :
      () => this.styles
  }
}

export class Equal extends ShapeBase {
  constructor(style = {}) {
    var name = 'Equal'
    var styles = {
      marginHorizontal : 3,
      flexGrow : 1,
      flexShrink : 1,
      ...style
    }

    super(name, styles)
  }
}

export class DescriptionThenView extends ShapeBase {
  constructor(style = {}) {
    var name = 'DescriptionThenView'
    var styles = {
      description : {
        //flex : 1,
        height : 20,
        marginHorizontal : 2,
        marginBottom : 15,
      },
      view : {
        //flex : 4,
        flexShrink : 1,
        marginHorizontal : 17,
        marginVertical : 7
      },
      ...style
    }

    var getStyle = (viewLocation, numberOfViews) =>
      viewLocation === numberOfViews - 1 ? this.styles.view : this.styles.description

    super(name, styles, getStyle)
  }
}

export class ShapeArray extends ShapeBase {
  constructor(type, shapeArray = [], style = {}){
    var name = 'ShapeArray'

    defaultStyle = {
      ...style
    }

    getStyle = (viewLocation) => {
      return {
        ...defaultStyle,
        [this.type] : this.shapeArray[viewLocation]
      }
    }
    super(name, defaultStyle, getStyle)

    this.shapeArray = shapeArray
    this.type = type
  }
}

export var Shapes = {
  Equal : new Equal(),
  DescriptionThenView : new DescriptionThenView(),
}
