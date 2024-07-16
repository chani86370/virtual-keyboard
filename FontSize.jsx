import React from 'react'
import Button from './Button'
function FontSize(props) {
  return (
    props.sizeArr.map((size,key)=><Button name={size} unDo={props.unDo} click={props.changeSize} key={key} type={"FontSize"}/>)
  )
}

export default FontSize