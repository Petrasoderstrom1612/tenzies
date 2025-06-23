import React from "react"

const Die = (props) => {

    console.log(props)
    return(
        <button className={`oneDie ${props.isHeld && "green-background"}`} onClick={() => props.toggleHold()}>{props.value}</button>
    )
}

export default Die