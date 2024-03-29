import React, { useState } from 'react'
function TextForm(props) {
    const [text, setText] = useState("Enter text here")
    const handleClick = () => {
        // console.log("upperCase was clicked")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","success")
    }
    const handleLowClick = () => {
        // console.log("LowerCase was clicked")
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","success")
    }
    const handleChange = (event) => {
        // console.log("Changed")
        setText(event.target.value)
    }
    const handleClear = (event) => {
        // console.log("Clear")
        setText("")
        props.showAlert("TextForm cleared","success")
    }
    return (
        <>
            <div style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" onChange={handleChange} style={{backgroundColor:props.mode==='dark'?'#282b33':'white' , color:props.mode==='dark'?'white':'black'}} value={text} rows="8"></textarea>
                    <button className="btn btn-primary my-2" onClick={handleClick} >to upperCase</button>
                    <button className="btn btn-primary my-2 mx-2" onClick={handleLowClick} >to LowerCase</button>
                    <button className="btn btn-primary my-2 mx-2" onClick={handleClear} >Clear</button>
                </div>

            </div>
            <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>Summary</h1>
                <p>{text.split(" ").filter((e)=>{return e.length!=0}).length} words and {text.length} characters</p>
                <p>{(1/125)*text.filter((e)=>{return e.length!=0}).split(" ").length} Minutes required to read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter something in textbox to preview here"}</p>

            </div>
        </>
    )
}

export default TextForm
