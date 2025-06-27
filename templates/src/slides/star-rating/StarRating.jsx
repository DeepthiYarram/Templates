import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa';
import './StarRating.css';

const StarRating = () => {
    const [rating, setRating] = useState(0);
    const [hover,setHover]=useState(0);

    return (
        <div className='main-container'>
            {
                [...Array(5)].map((_, index) => {
                    const present = index + 1
                    return (
                        <span
                            className={present<=(hover||rating)?'star filled':'star'}
                            key={index}
                            onClick={() => setRating(present)}
                            onMouseLeave={() => setHover(0)}
                            onMouseMove={() => setHover(present)}
                        >
                            <FaStar />
                        </span>)

                })
            }
        </div >
    )
}

export default StarRating