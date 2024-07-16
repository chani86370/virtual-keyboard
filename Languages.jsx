import React from 'react'
import Button from './Button'

function Languages(props) {
  
  return (
    props.languageArr.map((language,key)=><Button name={language} unDo={props.unDo}  click={props.changeLanguage} key={key} type={"Language"}/>)
  )
}

export default Languages