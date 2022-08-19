import React from 'react'
import Social from '../components/Social';
import './about.css';

const About = () => {
  return (
    <div>
      <div className='about-us'>
      <h1>About Me</h1>
      <p>I am a motivated software engineer, whose interest is in using 
        technology <br/> to build solutions to  solve real world problems 
        along <br/>with building applications with utmost efficiency.
      </p>
      <Social />
      </div>
    </div>
  )
}

export default About