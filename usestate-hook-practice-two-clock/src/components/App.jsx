import React, {useState} from "react";

function App() {

  
  let now = new Date().toLocaleTimeString();

  const [ time, setTime ] = useState(now)

  function upDate(){
    setTime(now + 1);
  }

  setInterval(upDate, 1000);

  return (
    <div className="container">
      <h1>{now}</h1>
      <button onClick={upDate}>Get Time</button>
    </div>
  );
}

export default App;
