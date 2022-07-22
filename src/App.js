import React from 'react';
import WeightTracker from './components/WeightTracker';
import {useState} from 'react';
import './App.css';

function App() {
  
  // states for constants
  const [weight, setWeight] = useState("");
  const date = new Date();
  const todaysDate = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;
  
  return (
    <div className="App">
      <h1>Daily Weight Tracker</h1>
      <h2>Today's Date is {todaysDate}</h2>

      <WeightTracker weight={weight} setWeight={setWeight}/>

    </div>
  );
}

export default App;
