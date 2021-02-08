import React from 'react'
import {Button} from './Style'

const Pangram = ({word, setPangram, isPangram}) => {

 const pangramCheck = () => {
  const lowerWord = word.toLowerCase();
  let wordObj = {}
  for( let char of lowerWord){
   if(char.match(/[a-z]/i)){
    wordObj[char] = (wordObj[char] || 0) + 1
   }
  }

  if(Object.keys(wordObj) === 26){
   setPangram(true);
  }
  else{
   setPangram(false);
  }
 }

 const renderIsPangram = () => {
  return isPangram ? <p>is a Pangram</p> : <p>is not a Pangram</p>
 }

 return (
  <div className="pangram">
   {isPangram === null ? <Button onClick={() => pangramCheck()}>
    Pangram
   </Button> : renderIsPangram()}
  </div>
 )
}

export default Pangram
