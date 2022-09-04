import React, { useEffect } from "react";
import Latter from "./Latter";


function Word(props){

    // Place a previes attepmt on his row
    function renderPreviewsAttempt(){
        return props.word.map((letter,index)=>{
           return <Latter key={index} letter={letter.letter} style={letter.style} />
        })
    }

    // Shows the current attempt on his row
    function renderCurrentAttempt(){

        if(props.word.length===0){
            return renderEmptyWord();
        } else {// render the inserted letters of the current attempt
            let stringLetters = props.word.toString().split("");
            //Setting the a letter in the current attempt
            let letters = stringLetters.map((letter,index)=>{
                return <Latter key={index} letter={letter} />
            });
            for(let i = props.word.length; i<5;i++){
                letters.push(<Latter key={i} letter={""}/>)
            }
            return letters;
        }
        
    }

    // render an empry word
    function renderEmptyWord(){
        let letters =[];
        for(let i = 0; i<5;i++){
            letters.push(<Latter key={i} letter={""}/>)
        }
        return letters;
    }

    return (<div className="Word">
        {props.status=="attempted" && renderPreviewsAttempt()}
        {props.status=="current attempt" && renderCurrentAttempt()}
        {props.status=="unattempted" && renderEmptyWord()}
    </div>)

}

export default Word;