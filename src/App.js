import React from 'react';
import WeightTracker from './components/WeightTracker';
import {useState} from 'react';
import './App.css';
import Entries from './components/Entries';

function App() {
  
  // states for constants
  const [weight, setWeight] = useState("");
  const [entries, setEntry] = useState([]);
  const date = new Date();
  const todaysDate = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;
  
  
  return (
    <div className="App">
      <header>
        <h1>Daily Weight Tracker</h1>
          <h3>Today's Date is: {todaysDate}</h3>
      </header>
      <WeightTracker weight={weight} setWeight={setWeight} 
      entries={entries} setEntry={setEntry}/> 
      <Entries weight={weight} entries={entries}/>
    </div>
  );
}

export default App;
