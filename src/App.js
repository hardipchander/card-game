import './App.css';
import Card from './Componets/Card';

function App() {
  function onHandleReshuffle() {
    // Just to test for now
    console.log("Pressed the Reshuffle");
  }

  return (
    <div className="App">
      <div className="Header">
        <h1 className='title'>A picture is worth a thousand words, but a memory is priceless</h1>
        <button className='buttonReset' onClick={onHandleReshuffle}>Reshuffle</button>
      </div>
      
      <div className='rowOne'>
        <Card number={1}/>
        <Card number={2}/>
        <Card number={3}/>
        <Card number={4}/>
      </div>

      <div className='rowTwo'>
        <Card number={5}/>
        <Card number={6}/>
        <Card number={7}/>
        <Card number={8}/>
      </div>
    </div>
  );
}

export default App;
