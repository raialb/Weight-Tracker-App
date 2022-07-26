import React from "react";
import {useState} from 'react';
import WeightTracker from "./WeightTracker";

const EntryTracker = ({weight}) => {

    const date = new Date();
    const todaysDate = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;

    const editHandler = () => {

    }

    const deleteHandler = () => {
        
    }

    return (
        <div className="entry">
            <li className="weight">{todaysDate} {weight} lbs</li>
            <button onClick={editHandler} className='edit-button'>Edit</button>
            <button onClick={deleteHandler} className='delete-button'>Delete</button>
        </div>
    );

}


export default EntryTracker;