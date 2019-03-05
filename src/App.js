import React, {Component} from 'react';
import './css/tailwind.css';
import cards from './cards.json'
import ButtonWidget from './components/ButtonWidget'
import CardDisplay from './components/CardDisplay'
import _ from 'lodash'

class App extends Component {
  constructor(props) {
    super(props);
    const deck = _.shuffle(cards)
    this.state = {
      score: 0,
      play: 0,
      message: 'Bet or Pass',
      deck: deck,
      buttonsActive: [true, true, false, false]
    }
  }

  bet = (event) => {
    let score
    let message
    if (this.state.deck[2].value > this.state.deck[0].value && this.state.deck[2].value < this.state.deck[1].value) {
      score = 50
      message = 'Score 50 points - Next to Continue'
    } else if (this.state.deck[2].value < this.state.deck[0].value && this.state.deck[2].value > this.state.deck[1].value) {
      score = 50
      message = 'Score 50 points - Next to Continue'
    } else {
      score = -25
      message = 'Lose 25 points - Next to Continue'
    }

    score = this.state.score + score

    if (this.state.deck.length > 5) {
      this.setState({
        score: score,
        play: 1,
        message: message,
        buttonsActive: [false, false, true, false]
      })
    } else {
      this.setState({
        score: score,
        play: 1,
        message: 'Game Over',
        buttonsActive: [false, false, false, true]
      })
    }
  }
  next = () => {
    this.setState({
      play: 0,
      message: 'Bet or Pass',
      buttonsActive: [true, true, false, false]
    })
    this.state.deck.shift()
    this.state.deck.shift()
    this.state.deck.shift()
  }

  pass = () => {
    let score = this.state.score - 5

    if (this.state.deck.length > 4) {
      this.setState({score: score})
      this.state.deck.shift()
      this.state.deck.shift()
    } else {
      this.setState({
        score: score,
        message: 'Game Over',
        buttonsActive: [false, false, false, true]
      })
    }
  }

  restart = () => {
    const deck = _.shuffle(cards)
    this.setState  ({
      score: 0,
      play: 0,
      message: 'Bet or Pass',
      deck: deck,
      buttonsActive: [true, true, false, false]
  })
}

  render() {
    return (<div className="bg-grey-lightest">
      <div className="w-full bg-grey-light p-3 mt-6">
        <h1 className="text-center">Acey Duecey</h1>
      </div>

      <div className="my-2">
        <p className="text-center text-2xl p-3">
          Score: {this.state.score}
        </p>
      </div>

      <CardDisplay deck={this.state.deck} play={this.state.play}  />

      <div className=" flex justify-center m-4">
        <div className=" flex justify-center lg:w-2/5">
          <div className=" flex justify-around lg:w-2/5 x-3">
            <ButtonWidget name="bet" text="Bet" onClick={this.bet} active={this.state.buttonsActive[0]}/>
            <ButtonWidget name="pass" text="Pass" onClick={this.pass} active={this.state.buttonsActive[1]}/>
            <ButtonWidget name="next" text="Next" onClick={this.next} active={this.state.buttonsActive[2]}/>
            <ButtonWidget name="reset" text="Start Over" onClick={this.restart} active={this.state.buttonsActive[3]}/>
          </div>
        </div>
      </div>

      <div className="flex justify-center mb-2">
        <p className="text-3xl">{this.state.message}</p>
      </div>

      <div className="flex justify-center  mb-8">
        <p className="text-m text-grey-darker">{(this.state.deck.length - (2 + this.state.play)) + " Remaining Cards"}</p>
      </div>

      <div className="flex justify-center mb-4 text-orange mx-2">
        <p className="text-center">Bet on whether the next card turned over will have a value in-between the two cards shown.
          <br/>
          Aces are always high.
          <br/>
          Player loses on ties.</p>
      </div>

      <div className="flex justify-center  text-center text-orange-darker mx-2">
        <p>Scoring -- Win: 50 pts. / Lose: -25 pts. / Pass: -5 pts.</p>
      </div>
    </div>)
  }
}

export default App;
