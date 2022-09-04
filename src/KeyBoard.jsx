import React from "react";
import Row from "./KeyBoard-Components/KeysRow";

function KeyBoard(props){
    return<div className="KeyBoard">
        <Row keys={["Q","W","E","R","T","Y","U","I","O","P"]} onKeyClick={props.changeAttemptedWord} letterStatus={props.letterStatus}/>
        <Row keys={["A","S","D","F","G","H","J","K","L"]} onKeyClick={props.changeAttemptedWord} letterStatus={props.letterStatus}/>
        <Row keys={["ENTER","Z","X","C","V","B","N","M","DELETE"]} onKeyClick={props.changeAttemptedWord} onEnter={props.enter} letterStatus={props.letterStatus}/>
    </div>
}

export default KeyBoard;