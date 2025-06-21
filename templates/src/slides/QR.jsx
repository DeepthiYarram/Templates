import React from 'react'
import imageQR from '../assets/QR.png';
import '../slides/QR.css';

const QR = () => {
  return (
        <div className='main-container'>
            <div className='container'>
                <div className='container-qr'>
                    <img src={imageQR} alt='QRImage'></img>
                </div>
                <div className='para'>
                    <h3>Improve your front-end skills</h3>
                    <p>
                        Scan the QR code to visit BFE.dev and take your skills to next level.
                    </p>
                </div>
            </div>
        </div>
  )
}

export default QR
