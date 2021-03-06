import React, { useState } from "react";

function App() {

const [text, setText] = useState("");
const [items, setItems] = useState([]);

function handleChange(event){
 const newInput = event.target.value;
 setText(newInput);
}

function addItem(){
setItems(prevItems => {
  return [...prevItems, text]
})
setText("");
}





  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input 
        onChange={handleChange}
        type="text" 
        value={text}
        />
        <button
        onClick={addItem}
        >
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
         {items.map((todoItem) => {
            return <li>{todoItem}</li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
