import React, { Component } from 'react'

class ClassClick extends Component {

  clickEvent(){
    console.log('Button Clicked');
  }

  render() {
    return (
      <div>
        <button onClick={this.clickEvent}>Click me</button>
      </div>
    )
  }
}

export default ClassClick
