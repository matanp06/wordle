import React from "react";

function Latter(props){

    return <div className="Latter" style={props["style"]&&props.style}><p>{props.letter}</p></div>

}

export default Latter;