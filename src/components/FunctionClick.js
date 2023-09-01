import React from 'react'

function FunctionClick() {

  function clickEvent() {
    console.log("Button Clicked");
  }

  return (
    <div>
      <button onClick={clickEvent}>Click</button>
    </div>
  )
}

export default FunctionClick
