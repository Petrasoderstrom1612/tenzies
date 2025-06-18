import React from "react"

const Die = (props) => {
    console.log(props)
    return(
        <div className="oneDie" onClick={() => props.toggleHold()}><p className="number">{props.value}</p></div>
    )
}

export default Die