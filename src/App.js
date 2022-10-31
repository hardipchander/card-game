import './App.css';
import Card from './Componets/Card';

function App() {
  return (
    <div className="App">

      <div className="Header">

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
