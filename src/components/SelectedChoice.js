import React from 'react';
import '../App.css';


function SelectedChoice({items, currentItem, setCurrentItem}) {
    let randItem = "None";
    const currentChoiceHandler = (e) => {
        e.preventDefault();
        if (items.length !== 0) { 
            randItem = items[Math.floor((Math.random()*items.length))].text;
        } 
        else { randItem = "None";}
        console.log("Item Index:"+items.length+
                "\nrandItem Var:\n\t"+randItem); 
        setCurrentItem(randItem);
    }

    return (
        <form >
            <label >Selected: {currentItem} </label>
            <button type="submit"
                className="rounded-border body-element uppercase" 
                style={{
                    fontFamily: "inherit",
                    fontSize: "0.75em",
                    "--radius":"1em", 
                    backgroundColor:"var(--p-bg)",
                    borderColor:"#26ff55",
                    color:"#26ff55",
                    paddingLeft:"0.3em", 
                    paddingRight:"0.3em", 
                    cursor: "pointer"}}
                onClick={currentChoiceHandler} >Select New | ↻
            </button>   
        </form>
    );
}
export default SelectedChoice;