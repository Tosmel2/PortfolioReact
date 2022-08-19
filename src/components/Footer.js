import React from 'react'
import './footer.css'
import Social from './Social'

const Footer = () => {
  return (
    <div>
      <div className='footer'>
        <span className='bord'></span><p>Adewale Tosin</p><span className='bord'></span>
        <p>Copyright 2022  |  All rights Reserved</p>
        <Social props='color:white' />
      </div>
   
    </div>
    
  )
}

export default Footer