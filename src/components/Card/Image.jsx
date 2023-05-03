import React from 'react'
import './Card.css'
import './Image.css'

function Image({suite, number, color}) {

    let display = new Array;
    let tempDiv = new Array;

    const styleImage = {
        display: 'flex',
        color: color
    }

    const styleB = {
        fontSize: '300%',
    }

    const styleRotate = {
        transform: 'rotate(180deg)'
    }

    let styleTempDiv = {

        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        fontSize: '1.1rem'
    }

    const styleTempSuite = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    }

    const styleTempSuite21 = {
        position: 'absolute',
        top: '33%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    }

    const styleTempSuite22 = {
        position: 'absolute',
        top: '69%',
        left: '50%',
        transform: 'translate(-50%, -50%) rotate(180deg)',
    }

    const styleTempSuite31 = {
        position: 'absolute',
        top: '25%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    }

    const styleTempSuite32 = {
        position: 'absolute',
        top: '75%',
        left: '50%',
        transform: 'translate(-50%, -50%) rotate(180deg)',
    }

    if(number <= 10){

        if(number > 0 && number <= 3){
            styleImage.flexDirection = 'column';
            styleImage.justifyContent = 'space-around'

            for(let i = 0; i < number; i++){
                if(i == number-1 && i != 0){
                    display.push(<div style={styleRotate}>{suite}</div>)
                }
                else display.push(<div>{suite}</div>)       
            }
        }

        else if(number == 4 || number == 6){

            styleImage.flexDirection = 'row';
            styleImage.justifyContent = 'space-around'
            styleTempDiv.justifyContent = "space-between"


            for(let i = 0; i < number/2; i++){
                if(i == (number/2)-1){
                    tempDiv.push(<div style={styleRotate}>{suite}</div>)
                }
                else tempDiv.push(<div>{suite}</div>)       
            }   
            display.push(<div style={styleTempDiv}>{tempDiv}</div>);
            display.push(<div style={styleTempDiv}>{tempDiv}</div>);
        }

        else if(number == 5){
            let tempNum = Math.trunc(number/2);

            styleImage.flexDirection = 'row';
            styleImage.justifyContent = 'space-around'
            styleTempDiv.justifyContent = "space-between"

            for(let i = 0; i < tempNum; i++){
                if(i == (tempNum)-1){
                    tempDiv.push(<div style={styleRotate}>{suite}</div>)
                }
                else tempDiv.push(<div>{suite}</div>)       
            }   
            display.push(<div style={styleTempDiv}>{tempDiv}</div>);
            display.push(<div style={styleTempSuite}>{suite}</div>);
            display.push(<div style={styleTempDiv}>{tempDiv}</div>);
        }
        
        else if(number == 8 || number == 7){
            let tempNum = Math.trunc((number-1)/2);

            styleImage.flexDirection = 'row';
            styleImage.justifyContent = 'space-around';
            styleTempDiv.justifyContent = "space-between"


            for(let i = 0; i < tempNum; i++){
                if(i == tempNum-1){
                    tempDiv.push(<div style={styleRotate}>{suite}</div>)
                }
                else tempDiv.push(<div>{suite}</div>)       
            }   
            display.push(<div style={styleTempDiv}>{tempDiv}</div>);
            display.push(<div style={styleTempSuite21}>{suite}</div>);
            if(number == 8){
                display.push(<div style={styleTempSuite22}>{suite}</div>);
            }
            display.push(<div style={styleTempDiv}>{tempDiv}</div>);
        } 

        else if(number == 9 || number == 10){
            let tempNum = Math.trunc((number-1)/2);

            styleImage.flexDirection = 'row';
            styleImage.justifyContent = 'space-evenly';

            for(let i = 0; i < tempNum; i++){
                if(i >= (tempNum)-2){
                    tempDiv.push(<div style={styleRotate}>{suite}</div>)
                }
                else tempDiv.push(<div>{suite}</div>)       
            }   
            display.push(<div style={styleTempDiv}>{tempDiv}</div>);
            if(number == 9){
                display.push(<div style={styleTempSuite}>{suite}</div>);
            }
            if(number == 10){
                display.push(<div style={styleTempSuite31}>{suite}</div>);
                display.push(<div style={styleTempSuite32}>{suite}</div>);
            }
            display.push(<div style={styleTempDiv}>{tempDiv}</div>);
        }
    }
    else{

        styleImage.flexDirection = 'column';
        styleImage.justifyContent = 'space-around'

        if(number == 11){
            display.push(<div><b style={styleB}>J</b></div>)
        }
        if(number == 12){
            display.push(<div><b style={styleB}>Q</b></div>)
        }
        if(number == 13){
            display.push(<div><b style={styleB}>K</b></div>)
        }
    }
    
    return (
    <div className='image' style={styleImage}>
        {display}
    </div>
  )
}

export default Image