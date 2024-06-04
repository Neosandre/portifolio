import React from 'react'
import "./Hero.css"
import profile_img from "../../assets/profile_pic.png"
import AnchorLink from "react-anchor-link-smooth-scroll"


export default function Hero() {
  return (
    <div id='home' className='hero'>
      <img className='profile_img' src={profile_img} alt="" />
      <h1> <span>I am Ernesto Martins,</span> Junior Software Developer based in England.</h1>
      <p>I am a Junior Software developer with 1 year of professional experience 
      and many more years of self taught coding. </p>
     <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
     </div>
    </div>
  )
}
