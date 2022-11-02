import './App.css';
import { useState } from 'react';
import Card from './Componets/Card';

function App() {
  // Add state for storing information about the game
  const [numsForCards, setCards]=useState([1,2,3,4,1,2,3,4].sort(()=> Math.random() -0.5));

  function onHandleReshuffle() {
    // Randomize with random method
    const randomizeCard=[...numsForCards].sort(()=> Math.random() -0.5);
    setCards(randomizeCard);
  }

  return (
    <div className="App">
      <div className="Header">
        <h1 className='title'>A picture is worth a thousand words, but a memory is priceless</h1>
        <button className='buttonReset' onClick={onHandleReshuffle}>Reshuffle</button>
      </div>
      
      <div className='rowOne' >
        <Card number={numsForCards[0]} id={numsForCards[0]}   />
        <Card number={numsForCards[1]} id={numsForCards[1]}  />
        <Card number={numsForCards[2]} id={numsForCards[2]}  />
        <Card number={numsForCards[3]} id={numsForCards[3]}  />
      </div>

      <div className='rowTwo' >
        <Card number={numsForCards[4]} id={numsForCards[4]}   />
        <Card number={numsForCards[5]} id={numsForCards[5]}  />
        <Card number={numsForCards[6]} id={numsForCards[6]}  />
        <Card number={numsForCards[7]} id={numsForCards[7]}  />
      </div>
    </div>
  );
}

export default App;
