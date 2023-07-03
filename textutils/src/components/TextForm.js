import React, { useState } from "react";
export default function TextForm(props) {
  
    const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success")
  };

  const handleLowClick = () => {
    console.log("Lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success")
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    console.log(window.speechSynthesis.getVoices());
    window.speechSynthesis.speak(msg);
  };

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'#042744'}}>
        <h1>Enter the text to analyze</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042744'}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>
          Convert to Uppercase
        </button>

        <button className="btn btn-primary mx-3" onClick={handleLowClick}>
          Convert to Lowercase
        </button>

        <button
          className="btn btn-primary mx-2 my-2"
          onClick={speak}
          type="submit"
        >
          Speak
        </button>
        </div>

      <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042744'}}>
        <h3>Your text summary</h3>

        <p>
          {text.split(" ").length} words , {text.length} characeters
        </p>

        <p> Time required to read: {0.008 * text.split(" ").length} minute</p>

        <h2>Preview</h2>

        <p>{text.length>0 ? text:"Write something in the text above to preview it here."}</p>
      </div>
    </>
  );
}
