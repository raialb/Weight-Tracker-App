import React from "react";
import axios from 'axios';
import {useState} from 'react';

const WeightTracker = ({weight, setWeight, entries, setDate, setEntry, postData}) => {
    
    const date = new Date();
    const entryDate = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;

    postData={weight};

    console.log(entryDate);

    const submitHandler = (e) => {
        e.preventDefault();

        setEntry([
            ... entries, {value: weight, id: Math.random()*1000 }, 
        ])
        setWeight("");

        axios.post('https://sheet.best/api/sheets/71db1089-937d-4068-851a-b85ff7ed109f',
        postData)
        .then(response => {
            console.log(response);
        })

    }

    const setWeightHandler = (e) => {
        setWeight(e.target.value);
    }
    {/*
    const setDateHandler = (e) => {
        console.log(e.target.value); // returns correct date
    }*/}

    return (
        <form>
            Put in how much you weighed today (in lbs):  
            <input type="text" required value={weight} 
            onChange={setWeightHandler} />
            
            {/*
            Select the date (in format mm/dd/yyyy): 
            <input type="date" value={entryDate} 
            min={entryDate} max={entryDate}/> */}

            <button 
                onClick={submitHandler} 
                className="submit-button" 
                type="submit">Enter
            </button>
        </form>
    )
}

export default WeightTracker;