import React from "react";
import Sticker from "../components/Sticker"


function CreateSticker(sticker){
    return <Sticker 
    key={sticker.id}
    symbol={sticker.emoji}
    term={sticker.name}
    definition={sticker.meaning}
  />
}

export default CreateSticker;