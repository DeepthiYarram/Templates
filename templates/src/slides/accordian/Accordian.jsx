import React, { useState } from 'react';
import '../accordian/Accordian.css';

const ButtonAccordian = ({name,description,isOpen,onClick})=>{
    return (
        <div>
            <button onClick={onClick}>{name}</button>
            {isOpen && <div>{description}</div>}
        </div>
    );
}

const Accordian = () => { 
    const [enableMultiple,setEnableMultiple]=useState(false);
    const [openIndexs,setOpenIndexs]=useState([]);
    const [openIndex,setOpenIndex]=useState(null);
    const accordionData = [
        { name: "First one", description: "Here is the description for the first one" },
        { name: "Second one", description: "Here is the description for the 2nd one" },
        { name: "Third one", description: "Here is the description for the 3rd one" },
        { name: "Fourth one", description: "Here is the description for the 4th one" },
    ];
    function handleClick(index){
        if(enableMultiple){
            setOpenIndexs(
                (pre)=>pre.includes(index)?pre.filter((i)=>i!==index):[...pre,index]
            );
        }
        else{
            setOpenIndex((pre)=>pre===index?[]:index);
        }
    }
    function handleEnableClick(){
        if(enableMultiple){
            setOpenIndexs([]);
            setOpenIndex(null);
        }
        setEnableMultiple(!enableMultiple);
    }
    return (
    <div className='main-container'>
        <button onClick={()=>handleEnableClick()}>Enable Multiple</button>
        {accordionData.map((item,index)=>(
            <ButtonAccordian 
            key={index} 
            name={item.name} 
            description={item.description}
            isOpen={enableMultiple?openIndexs.includes(index):index===openIndex}
            onClick={()=>handleClick(index)}
            />
            ))
        }    
            
    </div>
  )
}

export default Accordian