import React, { useEffect, useState } from "react";

function Key(props){

    // Extracting the letter props
    const {value,letterStatus:{correctPlacement,incorrectPlacement,notIncluded}} = props;

    // style hook --> the color of the letter: 
    // noIncluded : gray, no in the riddle 
    // incorrectPlacement : yellow, in the riddle but not in the correct position
    // correctPlacement : green, in the riddle word and in the correct position
    const [style,setStyle] = useState({});

    useEffect(()=>{setStyle(setBackGroundByLetterStatus())},[correctPlacement,incorrectPlacement,notIncluded]);
    
    // change the color of the keyboard letter according the placement status
    function setBackGroundByLetterStatus(){
        if(correctPlacement.includes(value)){
            return {backgroundColor:"green"}
        } else if (incorrectPlacement.includes(value)){
            return {backgroundColor:"yellow"}
        } else if (notIncluded.includes(value)) {
            return {backgroundColor:"gray"}
        } else {
            return {}
        }

    }

    // renders the key button
    return (<button style={style} onClick={()=>{
        if(props.value != "ENTER"){
            props.onClick(props.value);
        } else {
            props.enterClick();
        }
    }}>
        {props.value}
    </button>);

}

export default Key;