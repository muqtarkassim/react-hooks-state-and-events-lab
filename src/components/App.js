import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
   
const [appClass,setappClass]=useState('light')
//if (appClass) false ? "App dark" : "App light"
function buttonC(){
  console.log(appClass)//
  setappClass(appClass==='light'?'dark':'light')
}
  return (
    <div className={`App ${appClass}`}>
      <header>
        <h2>Shopster</h2>
        <button onClick= {buttonC}>{appClass} Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
