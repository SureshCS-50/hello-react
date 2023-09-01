import React, { Component } from 'react'

class ClassClick extends Component {

  clickEvent(){
    console.log('Class Component Button Clicked');
  }

  render() {
    return (
      <div>
        <button onClick={this.clickEvent}>Class Component Click - way 1</button>
        <button onClick={() => this.clickEvent()}>Class Component Click - way 2</button>
      </div>
    )
  }
}

export default ClassClick
