import React from 'react';
import {useState} from 'react';
import './App.css';
import Entries from './components/Entries';
import WeightTracker from './components/WeightTracker';

function App() {
  
  // states for constants
  const [weight, setWeight, setDate, postData, deleteData] = useState('');
  const [entries, setEntry] = useState([]);
  const date = new Date();
  const entryDate = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;
  
  return (
    <div className="App">
      <header>
        <h1>Daily Weight Tracker</h1>
          <h3>Today's Date is: {entryDate}</h3>
      </header>
      <WeightTracker weight={weight} setWeight={setWeight} 
      entries={entries} setEntry={setEntry} setDate={setDate} entryDate={entryDate}/> 
      <Entries weight={weight} entries={entries} setDate={setDate} entryDate={entryDate}/>
    </div>
  );
}


export default App;
