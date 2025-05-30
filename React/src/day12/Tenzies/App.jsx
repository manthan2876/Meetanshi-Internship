import React from 'react';
import Die from './components/Die';
import './App.css';
import Confetti from 'react-confetti';

function App() {
  const [dice, setDice] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);
  const [numbers, setNumbers] = React.useState({
    rolls: 0,
    bestTime: 0,
    time: 0,
  })
  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: i+1
      });
    }
    return newDice;
  }

  React.useEffect(() => {
    let interval = null;
    if (!tenzies) {
      interval = setInterval(() => {
        setNumbers(numbers => ({
          ...numbers,
          time: numbers.time + 1
        }));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [tenzies]);

  function rollDice() {
    if (!tenzies) {
      setDice(oldDice => oldDice.map(die => (
        die.isHeld ? die : { value: Math.ceil(Math.random() * 6), isHeld: false, id: die.id }
      )));
      setNumbers(numbers => ({
        ...numbers,
        rolls: numbers.rolls + 1
      }));
    } else {
      setTenzies(false);
      setDice(allNewDice());
      setNumbers(numbers => ({
        ...numbers,
        rolls: 0,
        time: 0
      }));
    }
  }


  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ?
        { ...die, isHeld: !die.isHeld } :
        die;
    }));
  }

  React.useEffect(() => {
    const allHeld = dice.every(die => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every(die => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
      setNumbers(numbers => ({
        ...numbers,
        bestTime: numbers.bestTime === 0 || numbers.time < numbers.bestTime
          ? numbers.time
          : numbers.bestTime
      }));
    }
  }, [dice]);


  const diceElements = dice.map(die => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));

  return (
    <div className="app-bg">
      {tenzies && <Confetti />}
      <main className="tenzies-container">
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls. Try to get the fastest time!</p>
        <div className="numbers-container">
          <div className='rolls-container'>
            <p>Rolls</p>
            <p>{numbers.rolls}</p>
          </div>
          <div className='bestTime-container'>
            <p>Best Time</p>
            <p>{numbers.bestTime}s</p>
          </div>
          <div className='time-container'>
            <p>Time</p>
            <p>{numbers.time}s</p>
          </div>
        </div>
        <div className="dice-container">
          {diceElements}
        </div>
        <button className="roll-button" onClick={rollDice}>
          {tenzies ? "New Game" : "Roll"}
        </button>
      </main>
    </div>
  );
}

export default App;
