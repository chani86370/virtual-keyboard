import React from 'react'

const Button = (props) => {
  return (
   <button onClick={() => {props.click(props.name, props.type) , props.unDo(props.name,props.type)}} >{props.name}</button>
  )
}

export default Button