import React from 'react'
import './Card.css'
import Image from './Image.jsx'


function Card({suite = "d", number="8"}) {

    let suiteSign = new String;
    let suiteColor = new String;
        //select suite sign and color
    switch(suite){
        case 's':
            suiteSign = "♠";
            suiteColor = "#000";
            break;
        case 'h':
            suiteSign = "♥";
            suiteColor = "#f00";
            break;
        case 'd':
            suiteSign = "♦";
            suiteColor = "#f00";
            break;
        case 'c':
            suiteSign = "♣";
            suiteColor = "#000";
            break;
    }

    let displayNumber = new String;
        //select display number/letter
    switch(number){
        case 1:
            displayNumber = "A";
            break;
        case 11:
            displayNumber = "J";
            break;
        case 12:
            displayNumber = "Q";
            break;
        case 13:
            displayNumber = "K";
            break;
        default:
            displayNumber = number;
            break;
    }

    let styleColor = {
        color: suiteColor
    }

  return (
    <>
        <div className='card'>
            <strong class="num" style={styleColor}>{displayNumber}</strong>

            <strong class="sui" style={styleColor}>{suiteSign}</strong>

            <Image suite={suiteSign} number={number} color={suiteColor} />

            <strong class="sui" style={styleColor}>{suiteSign}</strong>
            
            <strong class="num" style={styleColor}>{displayNumber}</strong>
        </div>
    </>
  )
}

export default Card