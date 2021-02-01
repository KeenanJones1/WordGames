import React, {useState, setState, useEffect} from 'react'
import style from 'styled-components'


function Word({word}) {
 const [isIsogram, setIsisogram] = useState(null);

 const isogramCheck = (string) => {
  let newString = string.toLowerCase();

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
    <WordContainer className="word-container">
     <h1>{word}</h1>
     <button onClick={() => isogramCheck(word)}>isogram check</button>
     {isIsogram !== null ? renderIsogram() : null }
    </WordContainer>
   
   <div>
     <h4>Isogram</h4>
     <p>An isogram is a word that has no repeating letters, consecutive or non-consecutive.</p>
    </div>
  </div>
 )
}

const WordContainer = style.div`
 background-color: coral;
 border: solid 2px black;
`

export default Word





