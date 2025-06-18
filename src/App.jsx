import { useState } from 'react'
import Die from "./components/Die"


function App() {
    const createARandomNr = () => {
    return Math.ceil(Math.random() * 6)    
    } 
    
    return (
    <>
    <main>
    <div className="big-box">
    <div className="dice-section">
    <Die value={createARandomNr()}/>
    <Die value={createARandomNr()}/>
    <Die value={createARandomNr()}/>
    <Die value={createARandomNr()}/>
    <Die value={createARandomNr()}/>
    <Die value={createARandomNr()}/>
    <Die value={createARandomNr()}/>
    <Die value={createARandomNr()}/>
    <Die value={createARandomNr()}/>
    <Die value={createARandomNr()}/>
    </div>
    </div>
    </main>
    </>
    )
}

export default App
