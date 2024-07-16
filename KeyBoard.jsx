import React from 'react'
import Button from './Button'
const KeyBoard = (props) => {
  return (
        props.letters.map((letter,key)=><Button name={letter} unDo={props.unDo}  key={key} click={props.letterClick} type={"Letter"}/>)

  )
}

export default KeyBoard