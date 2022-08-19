import React from 'react'
import './profile.css'
import Navbar from './Navbar';
import mine from '../../src/assets/mine.jpeg';
import Social from './Social'

const Profile = () => {
  return (
    <div className='profileCard'>
      <div className='leftProfile'>
        <div className='navbox'>
        <Navbar />
        </div>
        <p>HI THERE</p>
        <p>I AM ADEWALE TOSIN</p>
        {/* <h2>A Top-notch <span class="auto-type"></span></h2> */}
        <h2>A Top-notch Developer,<br/> Enthusiatic Dev and Software Engineer.</h2>
        <Social />
      </div>
      <div className='rightProfile'>
        <div className='soso'>
        <Social />
        </div>
        <div className='profileImage'>
          <img src={mine} alt='mine' className='myPix' />
        </div>
      </div>
    </div>
  )
}

export default Profile