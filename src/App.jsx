import React from 'react'
import Die from "./components/Die"


const createARandomNr = () => {
return Math.ceil(Math.random() * 6)    
} 

function App() {
    const [dieValue, setDieValue] = React.useState([
        createARandomNr(),
        createARandomNr(),
        createARandomNr(),
        createARandomNr(),
        createARandomNr(),
        createARandomNr(),
        createARandomNr(),
        createARandomNr(),
        createARandomNr(),
        createARandomNr(),
    ])

    const allDice = dieValue.map((oneDie) => {
        return (<Die value={oneDie}/>)
    })

    const rollAllDice = () => {
        setDieValue(prevValue => prevValue.map(onePrevValue => { 
            return createARandomNr()
        }))
    }
    
    return (
    <>
    <main>
        <button onClick={rollAllDice}>click</button>
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
