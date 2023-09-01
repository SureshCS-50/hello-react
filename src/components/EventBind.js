import React, { Component } from 'react'

export class EventBind extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: "Button Clicked",
      count: 0
    }
  }

  bindClickEvent(){
    this.setState({
      count: this.state.count + 1
    })
  }

  
  render() {
    let {message, count} = this.state;

    return (
      <div>
        <h1>{message} - {count}</h1>
        <div>
          <h1>"this" keyword is not binded to the class component so, clicking this button will throw error because "this" is undefined here</h1>
          <button onClick={this.bindClickEvent}>throws error - binding not done</button>
          <h1>Binding a button using bind keyword - "this.bindClickEvent.bind(this)"</h1>
          <button onClick={this.bindClickEvent.bind(this)}>binding a button using bind()</button>
          <h1>Other way to bind a button - "() ={'>'} this.bindClickEvent()"</h1>
          <button onClick={() => this.bindClickEvent()}>Click me</button>
        </div>
        
      </div>
    )
  }
}

export default EventBind
