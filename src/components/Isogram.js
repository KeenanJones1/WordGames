import React from 'react'
import {Button} from './Style'

const Isogram = ({isIsogram, word, setIsisogram}) => {

 const isogramCheck = () => {
  let newString = word.toLowerCase();
  const stringLoop = () => {
   for(let i = 0; i < newString.length - 1; i++){
    for(let j = i + 1; j < newString.length; j++){
     if(newString[i] === newString[j]){
      return false;
     }
    }
   }
   return true;
  }

  if(stringLoop() === true){
   setIsisogram(true);
  }else{
   setIsisogram(false);
  }
 }

 const renderIsogram = () => {
  return isIsogram ? <p>is an isogram</p> : <p>is not an isogram</p>
 }


 return (
  <div>
   { isIsogram === null ? <Button onClick={() => isogramCheck()}>Isogram</Button> : null}
   { isIsogram !== null ? renderIsogram() : null }
  </div>
 )
}


export default Isogram
