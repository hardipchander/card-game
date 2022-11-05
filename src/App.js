import './App.css';
import { useState, useEffect } from 'react';
import Card from './Componets/Card';

function App() {
  // Add state for storing information about the game with use state hook
  const [numsForCards, setCards]=useState([1,2,3,4,1,2,3,4].sort(()=> Math.random() -0.5));

  // State for whether the cards should be shown
  const [shown, setShown]=useState([false,false,false,false,false,false,false,false]);
  const [numChosen, setNumChosen]=useState(0);
  const [playerWon, setWon]=useState(false);

  // State for saving the chosen cards used later for comparing them 
  const [cardOne, setCardOne]=useState(-1);
  const [cardTwo, setCardTwo]=useState(-1);

  function onHandleReshuffle() {
    // Randomize with Math random method
    const randomizeCard=[...numsForCards].sort(()=> Math.random() -0.5);
    setCards(randomizeCard);

    // Need to cover all the cards when reshuffling is needed
    setShown([false,false,false,false,false,false,false,false]);

    // Reset game state
    setNumChosen(0);
    setWon(false);
    setCardOne(-1);
    setCardTwo(-1);
  }

  // Function to deal with when card is pressed and pass into the Card componet as a prop
  function onPressed(id) {
    if(shown[id]===false && numChosen<2) {
      const newShown=[...shown];
      newShown[id]=!newShown[id];
      setShown(newShown);
      setNumChosen(prevNumber=> prevNumber+1);
      cardOne>-1 ? setCardTwo(id) : setCardOne(id);
    }
    else if(shown[id]===true) {
      const newShown=[...shown];
      newShown[id]=!newShown[id];
      setShown(newShown);
      setNumChosen(prevNumber=> prevNumber-1);
      
    }
    
  }

  // Use this for comparing cards
  useEffect(function() {
    if(numChosen===2) {
      // Time to compare the cards
      if(cardOne>-1 && cardTwo>-1) {
          // They are matching 
          if(numsForCards[cardOne]===numsForCards[cardTwo]){
            console.log(numsForCards[cardOne],"===",numsForCards[cardTwo]);
            setNumChosen(0);
            setCardOne(-1);
            setCardTwo(-1);
          }
          else  { // no match 
            // Reset the cards here have to add a delay here 
            setNumChosen(0);
            setCardOne(-1);
            setCardTwo(-1);
            const newShown=[...shown];
            newShown[cardOne]=false;
            newShown[cardTwo]=false;
            setShown(newShown);
          }
      }
      
    }
  }, [numChosen])

  return (
    <div className="App">
      <div className="Header">
        <h1 className='title'>A picture is worth a thousand words, but a memory is priceless</h1>
        <button className='buttonReset' onClick={onHandleReshuffle}>Reshuffle</button>
      </div>
      
      <div className='rowOne'>
        <Card number={numsForCards[0]} id={numsForCards[0]} action={() => onPressed(0)} show={shown[0]}/>
        <Card number={numsForCards[1]} id={numsForCards[1]} action={() => onPressed(1)} show={shown[1]} />
        <Card number={numsForCards[2]} id={numsForCards[2]} action={() => onPressed(2)} show={shown[2]} />
        <Card number={numsForCards[3]} id={numsForCards[3]} action={() => onPressed(3)} show={shown[3]} />
      </div>

      <div className='rowTwo' >
        <Card number={numsForCards[4]} id={numsForCards[4]} action={() => onPressed(4)} show={shown[4]} />
        <Card number={numsForCards[5]} id={numsForCards[5]} action={() => onPressed(5)} show={shown[5]} />
        <Card number={numsForCards[6]} id={numsForCards[6]} action={() => onPressed(6)} show={shown[6]} />
        <Card number={numsForCards[7]} id={numsForCards[7]} action={() => onPressed(7)} show={shown[7]} />
      </div>
    </div>
  );
}

export default App;
