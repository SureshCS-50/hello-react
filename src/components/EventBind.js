import React, { Component } from 'react'

export class EventBind extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: "Button Clicked",
      count: 0
    }
    this.bindClickEvent = this.bindClickEvent.bind(this);
  }

  bindClickEvent(){
    this.setState({
      count: this.state.count + 1
    })
  }

  bindClickEventError(){
    this.setState({
      count: this.state.count + 1
    })
  }

  clickHandler = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  
  render() {
    let {message, count} = this.state;

    return (
      <div>
          <div style={{background: 'red'}}>
              <h1>{message} - {count}</h1>
          </div>
          <h2>"this" keyword is not binded to the class component so, clicking this button will throw error because "this" is undefined here</h2>
          <button onClick={this.bindClickEventError}>throws error - binding not done</button>
          <h2>Approach 1:</h2>
          <h2>Binding a button using bind keyword - "this.bindClickEvent.bind(this)"</h2>
          <h3>When the state changes, this binding will cause the significant impact on the performance, as we are binding inside the render method</h3>
          <button onClick={this.bindClickEvent.bind(this)}>binding a button using bind()</button>
          <h2>Approach 2:</h2>
          <h2>Binding a button using an arrow function - "() ={'>'} this.bindClickEvent()"</h2>
          <h3>When the state changes, this binding will cause the significant impact on the performance, as we are binding inside the render method</h3>
          <button onClick={() => this.bindClickEvent()}>Click me</button>
          <h2>Approach 3:</h2>
          <h2>Binding a button in constructor "this.bindClickEvent = this.bindClickEvent.bind(this)"</h2>
          <h3>As we are binding the button in constructor, binding happens once in this Component so, no issue in performance</h3>
          <button onClick={this.bindClickEvent}>Click me</button>
          <h2>Approach 4:</h2>
          <h2>Binding a button to an arrow function</h2>
          <h3>As we are binding to an arrow function, binding happens once in this Component so, no issue in performance</h3>
          <button onClick={this.clickHandler}>Click me</button>
        </div>
    )
  }
}

export default EventBind
