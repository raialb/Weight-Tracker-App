import React from "react";
import {useState} from 'react';

const WeightTracker = ({weight, setWeight, entries, setEntry}) => {
    
    const submitHandler = (e) => {
        e.preventDefault();
        setEntry([
            ... entries, {value: weight, id: Math.random()*1000 }, 
        ])
        setWeight("");
    }

    const setWeightHandler = (e) => {
        setWeight(e.target.value);
    }

    return (
        <form>
            Put in how much you weighed today: (in lbs) 
            <input type="text" required value={weight} onChange={setWeightHandler}/>
            <button 
                onClick={submitHandler} 
                className="submit-button" 
                type="submit">Enter
            </button>
        </form>
    )
}

export default WeightTracker;