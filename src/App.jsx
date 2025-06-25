import React from 'react'
import Die from "./components/Die"
import { nanoid } from "nanoid"


const createAllDice = () => { //create an array of objects
    return Array.from({length: 10}, () => (
        {
            value: Math.ceil(Math.random() * 6), 
            isHeld: false, 
            id: nanoid()
        }
    )) //you need {} to declare length. It says create an array of 10 elements and pass a function to call on every element of the array
}

console.log("id",createAllDice())

function App() {
    const [dieValue, setDieValue] = React.useState(createAllDice)

    const toggleHold = (id) => { //loop through the array of objects from state, if the clicked index is the same as index of the object in state, toggle its held property
        setDieValue(prevState => prevState.map((oneDie) => {
            return id ===  oneDie.id ? {...oneDie, isHeld: !oneDie.isHeld} : oneDie
        }))
    }    
    
    const rollDice = () => {   //loop through the array of objects from state and check each .isHeld and toggle the one clicked object's .isHeld
        setDieValue(prevValue => prevValue.map(oneDie => { 
           !oneDie.isHeld ? {...oneDie, value: Math.ceil(Math.random() * 6)} :  oneDie
        }))
    }

    const startNewGame = () => { //when the last die is clicked to be held, swap all back to isHeld: false
        if(dieValue.every(die => die.isHeld)){
            setDieValue(dieValue.map(oneDie => ({...oneDie, isHeld: false})))
        }
    }
    
    startNewGame()

    const allDice = dieValue.map((oneDie, index) => { //map through the state array and extract data - the properties + key + add props function
        return (<Die key={index} value={oneDie.value} isHeld={oneDie.isHeld} toggleHold={() => toggleHold(oneDie.id)}/>) //id comes from dieValue
    })
    
    return (
    <>
    <main>
        <div className="big-box">
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-section">
                {allDice}
            </div>
            <button onClick={rollDice} className="roll-dice">Roll</button>
        </div>
    </main>
    </>
    )
}

export default App
