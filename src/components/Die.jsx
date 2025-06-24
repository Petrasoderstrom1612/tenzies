import React from "react"

const Die = (props) => {

    console.log(props)
    return(
        <button className={`one-die ${props.isHeld && "green-background"}`} onClick={() => props.toggleHold(props.index)}>{props.value}</button>
    )
}

export default Die