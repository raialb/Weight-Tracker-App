import React from "react";
import {useState} from 'react';
import axios from 'axios';
import WeightTracker from "./WeightTracker";

const EntryTracker = ({weight,entryDate, deleteData, entry, entries, setEntry}) => {

    deleteData={weight};

    /*
    const editHandler = () => {

    }*/

    const deleteHandler = () => {
        
        setEntry(entries.filter(el => el.id !== entry.id));

        /*
        axios.delete('https://sheet.best/api/sheets/71db1089-937d-4068-851a-b85ff7ed109f',
        weight)
        .then(response => {
            console.log("here");
            console.log(response);
        })
        */
    }

    return (
        <div className="entry">
            <li className="weight"> {entryDate} {weight} lbs</li>
            {/*<button onClick={editHandler} className='edit-button'>Edit</button>*/}
            <button onClick={deleteHandler} className='delete-button'>Delete</button>
        </div>
    );

}


export default EntryTracker;