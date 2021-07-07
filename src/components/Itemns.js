import React from "react";
import '../App.css'
const Itemns = ({ contentx, item, items, setItems }) => {
    const deleteHandler = () => {
        setItems(items.filter((el => el.id !== item.id)));
    }
    return (
        <div className="item-holder" id={item.id} > 
            <li style={{paddingBottom:"0.2em", margin:"0"}}>
                <input size="10em"className='item-item body-element' style={{padding:"0", margin:"0"}} type="text" value={contentx} />
                {/*<button className="toggleBtn body-element" style={{fontSize:"0.8em", padding:"0.045em", margin:"0"}}>✅</button>*/}
                <button onClick={deleteHandler} className="trashBtn body-element"  
                    style={{backgroundColor: "white", fontSize:"0.65em", padding:"0.35em", margin:"0", marginLeft:"1.6em", borderRadius:"50%"}}>🗑️</button> 
            </li>   
        </div>
    );
}

export default Itemns;