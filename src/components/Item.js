import React, { useState } from "react";

function Item({ name, category }) {
  const [item,setItem]=useState("")
  const [bName,setbName]=useState("Add to")

  //console.log(item)
  
  const itemClicked=()=>{
    setItem(item===""? "in-cart":"")
    setbName(bName==="Add to"? "Remove from":"Add to")
  }
  return (
    <li className={item}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={itemClicked}>{bName} Cart</button>
    </li>
  );
}

export default Item;
