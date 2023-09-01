import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }

  increment() {
    // this.setState({
    //   count: this.state.count + 1
    // },
    //  () => {console.log("Callback value", this.state.count)} // callback function, triggered after the state value is set. output: 1
    // )
    // console.log(this.state.count); // output: 0

    this.setState((previousState, props) => ({
      count: previousState.count + 1
    }));

    console.log(this.state.count);
  }
  
  incrementFive() {
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
  }

  render() {
    const {count} = this.state; // destructuring the state variable
    return (
      <div>
        Count - {count}
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={() => this.incrementFive()}>Increment 5</button>
      </div>
    )
  }
}

export default Counter
