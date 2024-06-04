import React from 'react'
import "./About.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import profile_img from "../../assets/profile_pic.png"


export default function About() {
  return (
    <div id='about' className='about'>
      <div className="about-title" id="">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
        <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>Since my early days, I have always been genuinely fascinated by 
            unraveling the intricacies of technology and relishing delving 
            into its newest innovations and developments. 
            .</p>
            <p>It's this passion that led me to embark on a career path in IT during my college years. 
            Ever since, I have been immersing myself in various online IT courses and bootcamps. 
            I find the ability to express creativity through coding, design, and problem-solving 
            immensely captivating, driving my continued pursuit of knowledge in this dynamic field</p>
          </div>
          <div className="about-skills">
            
              <div className="about-skill"><p>React JS</p> <hr style={{width:"50%"}}/></div>
              <div className="about-skill"><p>JavaScript</p> <hr style={{width:"50%"}}/></div>
              <div className="about-skill"><p>C#</p> <hr style={{width:"50%"}}/></div>
              <div className="about-skill"><p>SQL</p> <hr style={{width:"50%"}}/></div>
              <div className="about-skill"><p>Python</p> <hr style={{width:"50%"}}/></div>

            
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1</h1>
          <p>YEAR OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>20+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>6+</h1>
          <p>CODING LANGUAGES</p>
        </div>
      </div>
     
     
    </div>
  )
}
