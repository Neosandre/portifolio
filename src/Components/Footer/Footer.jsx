import React from 'react'
import "./Footer.css"
import footer_logo from "../../assets/Ernesto.png"
import user_icon from "../../assets/user_icon.svg"

export default function Footer() {
  return (
    <div className='footer'>
    <div className='footer-top'>
        <div className="footer-top-left">
            <img src={footer_logo} alt="" />
            <p>I am a junior full stack developer with 1 year of experience</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter your emial' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
    </div>
      <hr />
      <div className="footer-bottom">
        <p className='footer-bottom-left'>© 2024 Ernesto Martins.All rights reserved.</p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}
