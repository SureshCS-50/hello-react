import React from 'react'

function Greet(props) {
  const {name, heroname} = props;
 return <h1>Hello {name} a.k.a {heroname}</h1>
}

export default Greet;
