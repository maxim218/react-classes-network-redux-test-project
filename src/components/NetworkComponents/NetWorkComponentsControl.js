import {useEffect, useState} from "react";
import fetchGet from "./fetchGet";
import ListOfActors from "./ListOfActors";

export default function NetWorkComponentsControl() {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        console.log("Use Effect Call");
        const url = "https://swapi.dev/api/people/";
        fetchGet(url, (answerText) => {
            const arr = JSON.parse(answerText).results;
            setRecords(arr);
        });
    }, []);

    return (
        <div>
            <h2>List of actors</h2>
            <ListOfActors records={records} />
        </div>
    );
}