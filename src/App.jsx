import React from 'react'
import Die from "./components/Die"


const createARandomNr = () => {
return Math.ceil(Math.random() * 6)    
} 

function App() {
    const [dieValue, setDieValue] = React.useState([
        {value: createARandomNr(),
         isHeld: false,   
        },
        {value: createARandomNr(),
         isHeld: false,   
        },
        // {value: createARandomNr(),
        //  isHeld: false,   
        // },
        // {value: createARandomNr(),
        //  isHeld: false,   
        // },
        // {value: createARandomNr(),
        //  isHeld: false,   
        // },
        // {value: createARandomNr(),
        //  isHeld: false,   
        // },
        // {value: createARandomNr(),
        //  isHeld: false,   
        // },
        // {value: createARandomNr(),
        //  isHeld: false,   
        // },
        // {value: createARandomNr(),
        //  isHeld: false,   
        // },
        {value: createARandomNr(),
         isHeld: false,   
        },

    ])

    const toggleHold = (index) => { //loop through all .isHeld from state and toggle the one clicked object
        setDieValue(prevState => prevState.map((oneDie,i) => {
            return index ===  i ? {...oneDie, isHeld: !oneDie.isHeld} : oneDie
        }))
    }

    const allDice = dieValue.map((oneDie, index) => { //toggle through the state array and extract data - the properties + key + add props function
        return (<Die key={index} value={oneDie.value} isHeld={oneDie.isHeld} toggleHold={() => toggleHold(index)} />)
    })


    const rollAllDice = () => { //use state setter via loop - if .isHeld property, do nothing, otherwise on each loop keep the properties and change value to CreateARandomNr function
        setDieValue(prevValue => prevValue.map(oneDie => { 
           if (!oneDie.isHeld) {
            return {...oneDie, value: createARandomNr()}
           } else{
            return oneDie
           }
        }))
    }

    const startNewGame = () => {
        if(dieValue.every(die => die.isHeld)){
            setDieValue(dieValue.map(oneDie => ({...oneDie, isHeld: false})))
        }
    }

    startNewGame()
    
    return (
    <>
    <main>
        <button onClick={rollAllDice}>ROLL DICE</button>
        <div className="big-box">
            <div className="dice-section">
                {allDice}
            </div>
        </div>
    </main>
    </>
    )
}

export default App
