import React from 'react'
// import Social from './Social'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <h1>ADEWALE TOSIN</h1>
      </div>
      <nav className="navLink">
        <ul>
          <li>About Me</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Contact Me</li>
        </ul>
      </nav>
      {/* <Social /> */}
    </div>
  )
}

export default Navbar