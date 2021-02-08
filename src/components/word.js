import React from 'react'
import style from 'styled-components'


function Word({word}) {

 return (
  <div>
    <h1>{word}</h1>
  </div>
 )
}

const WordContainer = style.div`
 background-color: coral;
 border: solid 2px black;
 color: white;
`

export default Word






