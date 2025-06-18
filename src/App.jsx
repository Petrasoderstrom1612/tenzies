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
        {value: createARandomNr(),
         isHeld: false,   
        },
        {value: createARandomNr(),
         isHeld: false,   
        },
        {value: createARandomNr(),
         isHeld: false,   
        },
        {value: createARandomNr(),
         isHeld: false,   
        },
        {value: createARandomNr(),
         isHeld: false,   
        },
        {value: createARandomNr(),
         isHeld: false,   
        },
        {value: createARandomNr(),
         isHeld: false,   
        },
        {value: createARandomNr(),
         isHeld: false,   
        },

    ])

    const toggleHold = (index) => {
        setDieValue(prevState => prevState.map((oneDie,i) => {
            return index ===  i ? {...oneDie, isHeld: !oneDie.isHeld} : oneDie
        }))
    }

    const allDice = dieValue.map((oneDie, index) => {
        return (<Die key={index} value={oneDie.value} isHeld={oneDie.isHeld} toggleHold={() => toggleHold(index)} />)
    })


    const rollAllDice = () => {
        setDieValue(prevValue => prevValue.map(oneDie => { 
           if (!oneDie.isHeld) {
            return {...oneDie, value: createARandomNr()}
           } else{
            return oneDie
           }
        }))
    }
    
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
