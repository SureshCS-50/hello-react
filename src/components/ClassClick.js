import React, { Component } from 'react'

export class ClassClick extends Component {

  clickEvent(){
    console.log('Button Clicked');
  }

  render() {
    return (
      <div>
        <button onClick={this.clickEvent}>Click</button>
      </div>
    )
  }
}

export default ClassClick
