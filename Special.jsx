import React from 'react'
import Button from './Button'
const Special = (props) => {
  return (
    props.specialArr.map((special,key)=><Button name={special} unDo={props.unDo} click={props.changeSpecials} key={key} type={"Special"}/>)
  )
}

export default Special