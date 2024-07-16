import React from 'react'
import Button from './Button'
const Operations = (props) => {
  return (
    props.operationsArr.map((operation,key)=><Button name={operation} unDo={props.unDo} click={props.changeOperations} key={key} type={"Operations"}/>)
  )
}

export default Operations