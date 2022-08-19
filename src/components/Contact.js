import React from 'react'
import Social from './Social'
import mail from '../../src/assets/mail.svg';
import call from '../../src/assets/call.svg';
// import { FiMail } from "react-icons/fa";
import './contact.css'

const Contact = () => {
  return (
    <div className='contactSection'>
      <div className='contactTouch'>
        <h1>Get In Touch</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Cras nec sollicitudin tellus. Phasellus ac nisi augue.</p>
        <Social />
        <div style={{padding:'10px'}}>
          <img src={mail} alt='mail-icon' /> <span>Adewaletosin0808@gmail.com</span><br />
          <img src={call} alt='call-icon' /> <span>(+234)806-895-7966</span>
        </div>
        {/* <FiMail /> <span>Adewaletosin0808@gmail.com</span> */}
        {/* <FiPhoneCall /> <span>(+234)806-895-7966</span> */}
      </div>
      <div className='contactForm'>
        <h2>Need a Service?</h2>
        <h1>Send A Message</h1>
        <form id='form'>
        <label>Enter your name<br/>
          <input type="text" />
        </label><br/>
          <label>Enter Email Address<br/>
            <input type="email" id="email" name="email" />
          </label><br/>
          <label for="lname">Write a Message<br/>
          <textarea rows = "5" cols = "50" name = "description">
          </textarea>
          {/* <textarea value=" " cols="30" rows="10" /> */}
          </label>
        </form>
        <button>Send Message</button>
      </div>
    </div>
  )
}

export default Contact