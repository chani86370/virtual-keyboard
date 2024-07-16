import React from 'react'

const Text = (props) => {
  return (
//    <button onClick={() => props.click(props.name, props.type)} >{props.name}</button>
   props.text.map((letterT,key)=>(letterT.letter === " ")?
   <h1 style={letterT.style}>&nbsp;</h1>:
  <h1 style={letterT.style}>{letterT.letter} </h1> ) 
  )
}
export default Text