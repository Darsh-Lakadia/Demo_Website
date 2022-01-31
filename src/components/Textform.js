import React, { useState } from 'react'

export default function Textform(props) {

    /* --------------On chnage of textarea handled here ----------------------*/
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    /* --------------Upper Case of  Text  ----------------------*/
    const handleUpClick = () => {
        console.log("Upper case was Clicked.");
        let newvar = text.toUpperCase();
        setText(newvar);
        props.alert("Converted to Upper Case", "success");
    }

    /* --------------LowerCase  Of Text  ----------------------*/
    const handleLowClick = () => {
        console.log("lower case was Clicked.");
        let newvar = text.toLowerCase();
        setText(newvar);
        props.alert("Converted to Lower Case", "success");

    }

    /* --------------Capitalized Case Button Handled here ----------------------*/
    const handleCapClick = () => {
        console.log("capitalized button clicked");
        const lowertxt = text.toLowerCase();
        //split where space occured
        const arr = lowertxt.split(" ");
        //itrate through spllited arr

        for (let i = 0; i < arr.length; i++) {

            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)

        }
        //join the arr
        const join = arr.join(" ");
        // let newvar = text.toLocaleUpperCase();
        setText(join);
        props.alert("Converted to Capitalized", "success");

    }
    /* --------------Clear the text  ----------------------*/
    const handleClrClick = () => {
        console.log("Clear text button Clicked");
        setText("");
        props.alert("Cleared the Text", "success");
    }

    /* --------------Copy the Text  ----------------------*/
    const handleCopy = () => {
        let copytext = document.getElementById("myBox");
        copytext.select();
        navigator.clipboard.writeText(copytext.value);
        props.alert("Copied Text in clipboard", "success");
    }

    /* --------------Handle Extra Spaces ----------------------*/
    const handleExtraSpaces = () => {
        let handledText = text.split(/[ ]+/);
        setText(handledText.join(" "));
        props.alert("Extra Space is Romovered", "success");
    }

    const [text, setText] = useState("");

    return (
        <div >
            <h1>{props.heading}</h1>
            {/* // text="new text";    //wrong way to change the state */}
            {/* //setText={"new text"} //right way to change the state*/}
            <div className="mb-3 ">
                <textarea className="form-control" rows="8" value={text} id="myBox" onChange={handleOnChange} style={{ backgroundColor: props.mode === "light" ? 'white' : 'grey' }}></textarea>
            </div>
            <button className="btn btn-primary  m-3" onClick={handleUpClick}>Convert to Upper case</button>
            <button className="btn btn-warning  m-3" onClick={handleCapClick}>Convert to Capitalized</button>
            <button className="btn btn-danger  m-3" onClick={handleLowClick}>Convert to Lower case</button>
            <button className="btn btn-info  m-3" onClick={handleClrClick}>Clear Text</button>
            <button className="btn btn-success  m-3" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-secondary  m-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <div>
                <h2>Your Text Summary :</h2>
                <h3>Total Character(with include Spaces) :{text.length}, Total Words : {text.split(" ").length - 1}</h3>
                <h3>Total Character(without include Spaces) :{text.length - (text.split(" ").length - 1)}</h3>
                <h4>Total Sentences : {text.split(".").length - 1} </h4>
                <p>{text.split(" ").length * 0.008} Minutes read </p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter something to preview"}</p>
                <br />
            </div>
        </div >
    )
}
