import React from 'react'
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import './social.css'

const Social = () => {
  return (
    <div>
      <div className="cols-icon">
        <a href="https://linkedin.com/in/tosin-adewale-4b61041b0">
          <FaLinkedin className='social-icon' />
          {/* <FaLinkedin className='iconi' style={{color: 'blue', fontSize: '2.1rem', border:'2px solid #2351DC', padding:'0.3rem', borderRadius: '50%', marginRight: '5px'}}/> */}
        </a>
        <a href="https://twitter.com/tosmel2">
        <FaTwitter className='social-icon' />
          {/* <FaTwitter style={{color: 'blue', fontSize: '2.1rem', border:'2px solid #2351DC', padding:'0.3rem', borderRadius: '50%'}}/> */}
        </a>
      </div>
    </div>
  )
}

export default Social