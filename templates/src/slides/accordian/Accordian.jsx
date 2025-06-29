import React, { useState } from 'react';
import '../accordian/Accordian.css';
import '../../assets/data.js';
// import data from '../accordian/data.js';

const ButtonAccordian = ({ question, answer, isOpen, onClick }) => {
    return (
        <>
            <button className={`${isOpen ? 'open' : 'not-open'}`} onClick={onClick}>{question}</button>
            {isOpen && <div className='answer'>{answer}</div>}
        </>
    );
}

const Accordian = () => {
    const [enableMultiple, setEnableMultiple] = useState(false);
    const [openIndexs, setOpenIndexs] = useState([]);
    const [openIndex, setOpenIndex] = useState(null);

    function handleClick(index) {
        if (enableMultiple) {
            setOpenIndexs(
                (pre) => pre.includes(index) ? pre.filter((i) => i !== index) : [...pre, index]
            );
        }
        else {
            setOpenIndex((pre) => pre === index ? [] : index);
        }
    }
    function handleEnableClick() {
        if (enableMultiple) {
            setOpenIndexs([]);
            setOpenIndex(null);
        }
        setEnableMultiple(!enableMultiple);
    }
    return (
        <div className='main-container'>
            <button className={`enable ${enableMultiple ? 'red' : 'green'}`} onClick={() => handleEnableClick()}>Enable Multiple</button>
            {data.map((item, index) => (
                <ButtonAccordian
                    key={item.id}
                    question={item.question}
                    answer={item.answer}
                    isOpen={enableMultiple ? openIndexs.includes(index) : index === openIndex}
                    onClick={() => handleClick(index)}
                />
            ))
            }
        </div>
    )
}

export default Accordian