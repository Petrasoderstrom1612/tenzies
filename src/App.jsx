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
    const [dice, setdice] = React.useState(createAllDice)

    const toggleHold = (id) => { //loop through the array of objects from state, if the clicked index is the same as index of the object in state, toggle its held property
        setdice(prevState => prevState.map((oneDie) => {
            return id ===  oneDie.id ? {...oneDie, isHeld: !oneDie.isHeld} : oneDie
        }))
    }    
    
    const rollDice = () => {   //loop through the array of objects from state and check each .isHeld and toggle the one clicked object's .isHeld
        setdice(prevValue => prevValue.map(oneDie => { //if you want to skip curlies, remove return too
           return !oneDie.isHeld ? {...oneDie, value: Math.ceil(Math.random() * 6)} :  oneDie
        }))
    }

    let gameWon = dice.every(die => die.isHeld) && dice.every(die => die.value === dice[0].value)
    const startNewGame = () => { //when the last die is clicked to be held, swap all back to isHeld: false
        if(gameWon){
            setdice(dice.map(oneDie => ({...oneDie, isHeld: false})))
        }
    }
    
    startNewGame()

    let btnName = startNewGame

    const allDice = dice.map((oneDie, index) => { //map through the state array and extract data - the properties + key + add props function
        return (<Die key={index} value={oneDie.value} isHeld={oneDie.isHeld} toggleHold={() => toggleHold(oneDie.id)}/>) //id comes from dice
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
            <button onClick={rollDice} className="roll-dice">{!gameWon ? "New game" : "Roll"}</button>
        </div>
    </main>
    </>
    )
}

export default App
