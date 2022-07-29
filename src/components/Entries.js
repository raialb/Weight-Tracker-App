import React from "react";
import EntryTracker from "./EntryTracker";
import WeightTracker from "./WeightTracker";

const Entries = ({entries, setEntry}) => {

    return (
        <div className="entries">
            <ul>{entries.map((
                entry) => (
                <EntryTracker weight={entry.value} 
                setEntry={setEntry}
                entries={entries} entry={entry}
                key={entry.id}/> ))}
            </ul>
        </div>
    )

}

export default Entries;