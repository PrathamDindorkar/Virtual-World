import { toBeEmpty } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import { useState } from "react";
import Alert from "./Alert";

export default function TextForm(props){
    const convertup = ()=>{
        console.log("Uppercase button was clicked");
        const newText = text.toUpperCase();
        setText(newText);
    }
const handleOnChange =(event)=>{
    console.log("On change");
    setText(event.target.value);
}
    const convertlow = ()=>{
        console.log("Clicked on lowercase button");
        const newtext = text.toLowerCase();
        setText(newtext);
    }

    const [text,setText] = useState("");
    return(
        <>
        <div className="TF">
        <h1>{props.title}</h1>
        <textarea className="form-control" value={text} rows={8} placeholder="Enter text here" onChange={handleOnChange}></textarea>
        <button className="btn btn-success" onClick={convertup}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={convertlow}>Convert to Lowercase</button>
        
        
            <h1>Summary</h1>
            <p>Your Characters are :{text.length} and number of words are:{text.split(" ").length}</p>
        </div>
        </>
    )
}

