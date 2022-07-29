import React from "react";
import EntryTracker from "./EntryTracker";
import WeightTracker from "./WeightTracker";

const Entries = ({entries, entryDate}) => {

    return (
        <div className="entries">
            <ul>{entries.map((
                entry) => (
                <EntryTracker weight={entry.value} entryDate={entry.entryDate} 
                id={entry.id}/> ))}
            </ul>
        </div>
    )

}

export default Entries;