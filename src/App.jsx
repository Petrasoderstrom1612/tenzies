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

    const toggleHold = (index) => { //loop through the array of objects from state and check each .isHeld and toggle the one clicked object's .isHeld
        setDieValue(prevState => prevState.map((oneDie,i) => {
            return index ===  i ? {...oneDie, isHeld: !oneDie.isHeld} : oneDie
        }))
    }

    const allDice = dieValue.map((oneDie, index) => { //map through the state array and extract data - the properties + key + add props function
        return (<Die key={index} value={oneDie.value} isHeld={oneDie.isHeld} toggleHold={toggleHold} index={index} />)
    })


    const rollDice = () => { //use state setter via loop - if .isHeld property, do nothing, otherwise on each loop we're really just updating the `value` property of the die object
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
    
    return (
    <>
    <main>
        <div className="big-box">
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
