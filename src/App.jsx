import React from 'react'
import './App.css'
import Card from './components/Card/Card'

function App() {
  let suites = ['s','d','h','c'];
  let display = new Array;

  suites.forEach(element=>{
    for(let i = 1; i<=13; i++){
      display.push(<Card suite={element} number={i}/>)
    }
  })


  return (
    <>
    {display}
    </>
  )
}

export default App