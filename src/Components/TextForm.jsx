import React, { useState } from 'react'
export default function TextForm(props) {
    var [text, setText] = useState("Enter your Text")

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);

    }

    const handleUpChange = () => {
        // console.log("Btn Click");
        let newText = text.toUpperCase()
        setText(newText);
        props.showAlert("Convert to UpperCase" , "success");
    }

    const handleWithChange = () => {
        // console.log("Btn Click");
        let newText = text.toLowerCase()
        setText(newText);
        props.showAlert("Convert to LowerCase" , "success");
    }


    const handleSpeak = () => {
        let newText = new SpeechSynthesisUtterance();
        newText.text = text;
        window.speechSynthesis.speak(newText);
        props.showAlert("Text here to speak" , "success");
    }

    const clearText = () => {
        // console.log("Btn Click");
        let newText = "";
        setText(newText);props.showAlert("Clear Text" , "success");
    }


    const handleCopy = () => {
        var newText = document.getElementById('exampleFormControlTextarea1');
        // newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Copy Here" , "success");
    }

    const handleExtra = () => {
        let newText = text.split(/[ ] + /);
        setText(newText.join(" "));
        props.showAlert("Remove Extra Space" , "success");
    }

    return (
        <div>
            <div className="m-5 container">
                <h1 className="">{props.heading}</h1>
                <textarea className={`form-control bg-${props.mode ==="light" ? "light" : "dark"} text-${props.mode ==="light" ? "dark" : "light"}`} id="exampleFormControlTextarea1" rows="10" value={text} onChange={handleOnChange}></textarea>
                <button disabled={text.length === 0} className='btn mx-3 btn-outline-danger mt-3' onClick={handleUpChange}>Convert To Upper Case</button>
                <button disabled={text.length === 0} className='btn mx-3 btn-outline-dark mt-3' onClick={handleWithChange}>Convert To Lower Case</button>
                <button disabled={text.length === 0} className='btn mx-3 btn-outline-success mt-3' onClick={handleSpeak}>Speak</button>
                <button disabled={text.length === 0} className='btn mx-3 btn-outline-primary mt-3' onClick={clearText} id='clear'>Clear Text</button>
                <button disabled={text.length === 0} className='btn mx-3 btn-outline-primary mt-3' onClick={handleCopy} id='clear'>Copy Text</button>
                <button disabled={text.length === 0} className='btn mx-3 btn-outline-primary mt-3' onClick={handleExtra} id='clear'>Remove Extra Text</button>
            </div>

            <div className="container">
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length} Words</p>
                <p>{text.length} Characters</p>
                <p>{0.008 * text.split("").filter((element)=>{return element.length !== 0}).length} Reading Time</p>
                <h3>Previews</h3>
                <p>{text.length>0 ? text : "Nothing to Preview!"}</p>
            </div>
        </div>
    )
}
