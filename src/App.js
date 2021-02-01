import React from 'react'
import './App.css';
import Word from './components/word'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      word: "",
      definition: ""
    }
  }

  setWord = (data) => {
    this.setState({
      word: data[0].word,
      definition: data[0].definition
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
        <Word word={this.state.word}/>
      </div>
    );
  }
}

export default App;
