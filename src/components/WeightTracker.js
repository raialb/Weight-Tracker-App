import React from "react";
import {useState} from 'react';

const WeightTracker = ({weight, setWeight}) => {
    
    return (
        <form>
            <label>
                Put in how much you weighed today:  
                <input 
                    type="number"
                    required
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}/>lbs
                <textarea>Please enter numbers only!</textarea>
            </label>
        </form>
    )
}

export default WeightTracker;