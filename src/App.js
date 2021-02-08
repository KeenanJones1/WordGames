import React from 'react'
import './App.css';
import Word from './components/word'
import Isogram from './components/Isogram';
import Pangram from "./components/Pangram";


class App extends React.Component{
  constructor(){
    super()
    this.state = {
      word: "",
      definition: "",
      isIsogram: null,
      isPangram: null
    }
  }

  setWord = (data) => {
    this.setState({
      word: data[0].word,
      definition: data[0].definition
    })
  }

  setIsisogram = (bool) => {
    this.setState({
      isIsogram: bool
    })
  }

  setIsPangram = (bool) => {
    this.setState({
      isPangram: bool
    })
  }

  componentDidMount(){
    fetch("https://random-words-api.vercel.app/word")
    .then(resp => resp.json())
    .then(data => this.setWord(data))
  }
  
  render(){
    return (
      <div className="App">
        <div className="row">
          <div className="col-6">
            <Word word={this.state.word}/>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Isogram isIsogram={this.state.isIsogram} word={this.state.word} setIsisogram={this.setIsisogram}/>
          </div>

          <div className="col">
            <Pangram word={this.state.word} setPangram={this.setIsPangram} isPangram={this.state.isPangram}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
