import React, {Component} from 'react'

class Welcome extends Component{
  render(){
    const {name, heroname} = this.props; // destructuring the props variable
    return <h1>Welcome {name} a.k.a {heroname}</h1>
  }
}

export default Welcome;
