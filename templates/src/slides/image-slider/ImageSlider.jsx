import React, { useEffect, useState } from 'react'
import '../../assets/imagesSet.json';
import axios from 'axios';
import './ImageSlider.css';

const ImageSlider = () => {
    const [images, setImages] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [slideDone, setSlideDone] = useState(true);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get("http://localhost:3005/image");
                setImages(response.data);
                setLoading(false);
            } catch (e) {
                console.log("Error:", e);
                setLoading(false);
            }
        }
        fetchImages();
    }, []);

    useEffect(() => {
        if (slideDone) {
            setSlideDone(false);
            const timer = setTimeout(() => {
                sliderNext();
                setSlideDone(true);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [slideDone, images]);

    const sliderNext = () => {
        setActiveIndex((val) => val >= images.length - 1 ? 0 : val + 1);
    }

    const sliderPrevious = () => {
        setActiveIndex((val) => val <= 0 ? images.length - 1 : val - 1);
    }

    if (loading) return <h1>Loading...</h1>

    return (
        <div className='main-container'>
            <div className='slide-container'>
                {images.length > 0 &&
                    <img
                        className='image-slider'
                        src={images[activeIndex].url}
                        alt={`Dog ${images[activeIndex].id}`}
                    />
                }
                <button className='nav-button left' onClick={() => sliderPrevious()}>{"<"}</button>
                <button className='nav-button right' onClick={() => sliderNext()}>{">"}</button>
                <div className='dot-container'>
                    {images.map((_, index) => {
                        return (<span
                            key={index}
                            className={`dot ${index === activeIndex ? 'active-dot' : ''}`}
                            onClick={() => setActiveIndex(index)}
                        ></span>)
                    })}
                </div>
            </div>
        </div>
    )
}

export default ImageSlider