import React, { useState } from 'react'
function TextForm(props) {
    const [text, setText] = useState("Enter text here")
    const handleClick = () => {
        // console.log("upperCase was clicked")
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick = () => {
        // console.log("LowerCase was clicked")
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleChange = (event) => {
        // console.log("Changed")
        setText(event.target.value)
    }
    const handleClear = (event) => {
        // console.log("Clear")
        setText("")
    }
    return (
        <>
            <div>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" onChange={handleChange} value={text} rows="8"></textarea>
                    <button className="btn btn-primary my-2" onClick={handleClick} >to upperCase</button>
                    <button className="btn btn-primary my-2 mx-2" onClick={handleLowClick} >to LowerCase</button>
                    <button className="btn btn-primary my-2 mx-2" onClick={handleClear} >Clear</button>
                </div>

            </div>
            <div className="container my-3" >
                <h1>Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{(1/125)*text.split(" ").length} Minutes required to read</p>
                <h3>Preview</h3>
                <p>{text}</p>

            </div>
        </>
    )
}

export default TextForm
