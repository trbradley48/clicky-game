import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Character from './components/CharacterCard'
import characters from './Characters.json'
import Wrapper from './components/Wrapper'


class App extends React.Component {

  state = {
    yourGuessText: "",
    yourScore: 0,
    yourHighScore: 0,
    yourGuesses: [],
    characters
  }

  handleClick = id => {

    var newGuess = this.state.yourGuesses;
    var winText = "You guessed correctly!";
    var loseText = "You guessed incorrectly :(";
    var correct = true;

    for (let i = 0; i < (this.state.yourGuesses.length + 1); i++) {
      if (id === this.state.yourGuesses[i]) {
        console.log("Matching IDs");
        this.setState({ yourGuessText: loseText })
        newScore = 0;
        this.setState({ yourScore: newScore });
        newGuess = [];
        correct = false;
        break;
      }
      else {
        this.setState({ yourGuessText: winText })
        var newScore = this.state.yourScore;
        newScore++;
        this.setState({ yourScore: newScore })
        var highScore = this.state.yourHighScore;
        if (newScore > highScore) {
          highScore = newScore;
          this.setState({ yourHighScore: highScore })
        }
      }
    }
    if (correct) {
      newGuess.push(id);
    }
    console.log("Score:" + newScore);
    this.setState({ yourGuesses: newGuess })



    // var ids = [0,1,2,3,4,5,6,7,8,9,10,11];
    // this.shuffle(ids);
    // // console.log(ids);
    // var temp = this.state.characters
    // // console.log("temp[0]")
    // // console.log(temp[0])
    // // console.log(temp)

    // for (let i = 0; i < this.state.characters.length; i++) {
    //   // temp[i] = ids[i]
    //   console.log(ids[i])
    //   ids[i] = temp[i]
    // }
    // // console.log(temp)
    // // console.log("ids[0]")
    // console.log(ids[0])
    // // console.log(ids)
    // // this.setState({ characters: temp })

  }

  // shuffle(array) {
  //   var tmp, current, top = array.length;
  //   if (top) while (--top) {
  //     current = Math.floor(Math.random() * (top + 1));
  //     tmp = array[current];
  //     array[current] = array[top];
  //     array[top] = tmp;
  //   }
  //   return array;
  // }




  // shuffle(set) {
  //   let items = Array.from(set);
  //   return items[Math.floor(Math.random() * items.length)];
  // }


  render() {
    return (
      <React.Fragment>
        <Wrapper>
          <Navbar
            yourGuessText={this.state.yourGuessText}
            yourScore={this.state.yourScore}
            yourHighScore={this.state.yourHighScore}
          />
          {this.state.characters.map(character => (
            <Character
              handleClick={this.handleClick}
              id={character.id}
              key={character.id}
              name={character.name}
              image={character.image}
            />
          ))}

        </Wrapper>
      </React.Fragment>
    );
  }
}

export default App;
