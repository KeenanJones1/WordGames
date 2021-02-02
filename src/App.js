import React from 'react'
import './App.css';
import Word from './components/word'
import Particles from "react-tsparticles";


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
        <div className="particles">
        <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#0d47a1",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
    );
  }
}
        </div>
      </div>
    );
  }
}

export default App;
