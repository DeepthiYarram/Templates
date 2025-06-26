import React, { useState } from 'react'
import './RandomColor.css';

const RandomColor = () => {
    const [randomColor,setRandomColor]=useState('');
    const [colorTitle,setColorTitle]=useState('');
    const [name,setName]=useState('');
    const handleHexColor=()=>{
        setRandomColor('#'+Math.floor(Math.random()*16777215).toString(16).padStart(6,'0'));
        setColorTitle('Create Hex Color');
    }

    const handleRGBColor=()=>{
        const r=Math.floor(Math.random()*256);
        const g=Math.floor(Math.random()*256);
        const b=Math.floor(Math.random()*256);
        setRandomColor(`rgb(${r},${g},${b})`);
        setColorTitle('Create RGB Color');
    }

    const handleColor=()=>{
        if(name==='hex'){
            handleHexColor();
        }
        else if(name==='rgb'){
            handleRGBColor();
        }
        else{
            setColorTitle('Click on either hex or rgb');
            setRandomColor('');
        }
    }

    return (
        <div className='container'>
            <h1>Change into random color</h1>
            <div className='button-container' >
                <button onClick={()=>setName('hex')}>Random Hex Color</button>
                <button onClick={()=>setName('rgb')}>RGB Random Color</button>
                <button onClick={()=>handleColor()}>Random {name} Color</button>
            </div>
            <div className='change-container'
            style={{backgroundColor:randomColor}}>
                <h1>{colorTitle}</h1>
                <h1>{randomColor}</h1>
            </div>
        </div>
    )
}

export default RandomColor