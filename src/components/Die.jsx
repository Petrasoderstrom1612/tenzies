import React from "react"

const Die = (props) => {

    console.log(props)
    return(
        <button 
        className={`one-die ${props.isHeld && "green-background"}`} 
        aria-pressed={props.isHeld}
        aria-label={`Die with value ${props.value}, ${props.isHeld ? "held" : "not held"}`}
        onClick={props.toggleHold}>{props.value}</button>
    )
}

export default Die