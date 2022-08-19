import React from 'react'
import './testimonial.css'
import pix from '../../src/assets/pix.svg';
import mine from '../../src/assets/mine.jpg';

const Testimonial = () => {
  return (
    <div className='testimonial'>
      <div className='leftTestimonial'>
        <h1>Testimonies & Recommendations</h1>
      </div>
      <div className='rightTestimonial'>
        <div className='subright'>
          <div>
            <img src={pix} alt='testimonial' />
          <h2>Adewale Tosin</h2>
            <p>Tosin gets things done. He’s very passionate about 
              what he does and he’s always fun to be with.</p>
          </div>
          <div>
          <img src={mine} className='img' alt='testimonial' />
          <h2>Adewale Tosin</h2>
            <p>Tosin gets things done. He’s very passionate about 
              what he does and he’s always fun to be with.</p>
          </div>
        </div>

        <div className='subright'>
          <div>
          <img src={mine} alt='testimonial' />
          <h2>Adewale Tosin</h2>
            <p>Tosin gets things done. He’s very passionate about 
              what he does and he’s always fun to be with.</p>
          </div>
          <div>
          <img src={pix} className='img' alt='testimonial' />
            <h2>Adewale Tosin</h2>
            <p>Tosin gets things done. He’s very passionate about 
              what he does and he’s always fun to be with.</p>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default Testimonial