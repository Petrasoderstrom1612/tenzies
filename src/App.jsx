import React from 'react'
import Die from "./components/Die"
import { nanoid } from "nanoid"
import DropConfetti from './components/DropConfetti'

function App() {
    const createAllDice = () => { //create an array of objects
        return Array.from({length: 10}, () => (
            {
                value: Math.ceil(Math.random() * 6), 
                isHeld: false, 
                id: nanoid()
            }
        )) //you need {} to declare length. It says create an array of 10 elements and pass a function to call on every element of the array
    }
    
    const [dice, setdice] = React.useState(() => createAllDice())
    const buttonAfterWin = React.useRef(null)

    const toggleHold = (id) => { //loop through the array of objects from state, if the clicked index is the same as index of the object in state, toggle its held property
        setdice(prevState => prevState.map((oneDie) => {
            return id ===  oneDie.id ? {...oneDie, isHeld: !oneDie.isHeld} : oneDie
        }))
    }    
    
    const rollDice = () => {   //loop through the array of objects from state and check each .isHeld and toggle the one clicked object's .isHeld
        if(gameWon){ //restart the game by setting isHeld to false on all dice
            setdice(createAllDice())
        }
        setdice(prevValue => prevValue.map(oneDie => { //if you want to skip curlies, remove return too
            return !oneDie.isHeld ? {...oneDie, value: Math.ceil(Math.random() * 6)} :  oneDie
        }))
    }
    
    let gameWon = dice.every(die => die.isHeld) && dice.every(die => die.value === dice[0].value)
    let btnName = gameWon ? "New game" : "Roll"

    const allDice = dice.map((oneDie, index) => { //map through the state array and extract data - the properties + key + add props function
        return (<Die key={index} value={oneDie.value} isHeld={oneDie.isHeld} toggleHold={() => toggleHold(oneDie.id)}/>) //id comes from dice
    })
    
    React.useEffect(() =>{
        buttonAfterWin.current.focus()
    },[gameWon])

    return (
    <>
    <main>
        <div className="big-box">
            {gameWon && <DropConfetti />}
            <p aria-live="polite" className="sr-only">{gameWon ? `You won! Press "New Game" to start again` : "You still have not won. Keep playing."}</p>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-section">
                {allDice}
            </div>
            <button onClick={rollDice} className="roll-dice" ref={buttonAfterWin}>{btnName}</button>
        </div>
    </main>
    </>
    )
}

export default App
