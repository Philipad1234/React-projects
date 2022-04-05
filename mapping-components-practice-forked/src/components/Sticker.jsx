import React from "react";


function Sticker(props){
    return  <div className="term">
    <dt>
      <span className="emoji" role="img" aria-label="Tense Biceps">
        {props.symbol}
      </span>
      <span>{props.term}</span>
    </dt>
    <dd>
     {props.definition}
    </dd>
  </div>
}


export default Sticker;