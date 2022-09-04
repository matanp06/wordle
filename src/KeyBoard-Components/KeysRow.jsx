import React from "react";
import Key from "./Key";

function Row(props){
    return <div className="Row">
        {props.keys.map((value,index) => {
            if(value!="ENTER" && value!="DELETE"){
               return <Key value={value} key={index} letterStatus={props.letterStatus} onClick={props.onKeyClick} />
            } else if(value === "ENTER") {
               return <Key value={value} key={index} letterStatus={props.letterStatus} enterClick={props.onEnter} />
            } else {
                return <Key value={value} key={index} letterStatus={props.letterStatus} onClick={props.onKeyClick}/> 
            }    
        })}
    </div>
}

export default Row;