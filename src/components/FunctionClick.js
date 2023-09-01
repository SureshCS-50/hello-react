import React from 'react'

function FunctionClick() {

  function clickEvent() {
    console.log("Functional Component Button Clicked");
  }

  return (
    <div>
      <button onClick={clickEvent}>Functional Component Click - way 1</button>
      <button onClick={() => clickEvent()}>Functional Component Click - way 2</button>
    </div>
  )
}

export default FunctionClick
