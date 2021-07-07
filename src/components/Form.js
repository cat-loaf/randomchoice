import React from 'react'
import '../App.css'
function Form({ setInputText, items, setItems, inputText}) {
    const inputTextHandler = (e) => {
        console.log(('%c• From: '+e.target.localName+'\n• Value: '+e.target.value), "font-family: Consolas, monospace; font-size: 20px;");
        setInputText(e.target.value);
        if (e.keyCode === 13) {
            e.preventDefault();
            document.getElementById("submit-but").click();
        }
    }
    const submitListHandler = (e) => {
        e.preventDefault();
        console.log(('%c• From: Button\n• Value Submitted:'+e.target), "font-family: Consolas, monospace; font-size: 20px;");
        setItems([
            ...items, {text: inputText, enabled:true, id:(Math.random()*1000) }
        ])
        setInputText("");

    }
    return (
            <form>
                <input 
                    value={inputText} 
                    id="text-in" 
                    onChange={inputTextHandler} 
                    className="body-element"  
                    size="10em" 
                    />
                <button id="submit-but" 
                    onClick={submitListHandler} 
                    className="rounded-border body-element" 
                    size="10em" 
                    style={{
                    "--radius":"50%", 
                    backgroundColor:"white",
                    paddingLeft:"0.3em", 
                    paddingRight:"0.3em", 
                    cursor: "pointer"}} type="submit">+</button>
            </form>
    );
}

export default Form;