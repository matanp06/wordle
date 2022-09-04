import React from "react";
import Word from "./Word";

function Board(props){

    return (<div className="Board">
        {props.attempts.map((attempt,index)=>{
            if(index<props.attemptNO){// show previews attempts on their rows
                return <Word key={index} word={attempt} status={"attempted"}/>
            } else if(index === props.attemptNO){ // Displays the current attempt
                return <Word key={index} word={props.currentWord} status={"current attempt"} />
            } else{ // Display next attempts as empty words
                return <Word key={index} status={"unattempted"} />
            }
        })}
    </div>)

}

export default Board;