import React from "react";
import Sticker from "../components/Sticker"
import emojipedia from "../emojipedia"
import CreateSticker from "../components/CreateSticker"

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
{emojipedia.map(CreateSticker)}
        
      </dl>
    </div>
  );
}

export default App;
