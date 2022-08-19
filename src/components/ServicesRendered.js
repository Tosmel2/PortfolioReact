import React from 'react'
// import training from '../../src/assets/training.svg';
import './services.css'

const ServicesRendered = ({myImage, text, smallText}) => {
  return (
    <div className="renderSize" >
      <img src={myImage} alt='mine' />
      <h3>{text}</h3>
      <p>{smallText}
      </p>
    </div>
  )
}

export default ServicesRendered