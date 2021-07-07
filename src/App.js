import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import List from './components/List';
import SelectedChoice from './components/SelectedChoice';


function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  const [currentItem="None", setCurrentItem] = useState("");
  
  return (
    <>
      <header className="App-header"  >
          {/*style={{"--accent-color":"red"}}*/}
      </header>
      <div className="head bod glow rounded-border" style={{"--radius":"1em"}}>        
        <p className="no-pad no-margin uppercase" 
            style={Object.assign({}, {
              textAlign: "center",
              fontSize: "2em",
              })}>
          choice picker<br />
          <subtitle ><hr />made by catloaf (granth j.)</subtitle>
        </p>
      </div>
      <hr style={{marginLeft:"1em", marginRight:"1em"}}/>
      <div className="bod glow rounded-border" style={{"--radius":"1em"}}>        
      
        <p className="no-pad no-margin capitalised" 
            style={{
              
              }}>
                
          choices: 
          <SelectedChoice 
            currentItem={currentItem} 
            setCurrentItem={setCurrentItem} 
            items={items}/>
        </p>
        
          <Form 
            inputText={inputText} 
            items={items}
            setItems={setItems} 
            setInputText={setInputText} 
          />
          
          
          <List setItems={setItems} items={items} />
          
      </div>
    </>
  );
}

export default App;
