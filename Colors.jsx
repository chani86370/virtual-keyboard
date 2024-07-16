import React from 'react'
import Button from './Button'
const Colors = (props) => {
  return (
    props.colorsArr.map((color,key)=><Button name={color} unDo={props.unDo} click={props.changeColors} key={key} type={"Colors"}/>)
  )
}

export default Colors