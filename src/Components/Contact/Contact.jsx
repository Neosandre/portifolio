import React from 'react'
import "./Contact.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import mail_icon from "../../assets/mail_icon.svg"
import location_icon from "../../assets/location_icon.svg"
import call_icon from "../../assets/call_icon.svg"

export default function Contact() {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ba3e1374-890a-4274-9aa3-c564ef42ced5");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id='contact'  className='contact'>
      <div className="contact-title">
      <h1>Get in touch</h1>
      <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'm currently avaliable to take on new projects,
             so feel free to contact me</p>
             <div className="contact-details">
                <div className="contact-detail">
                  <img src={mail_icon} alt="" /> <p>neosandre@gmail.com</p>
                </div>
                <div className="contact-detail">
                  <img src={call_icon} alt="" /> <p>+44 7402248866</p>
                </div>
                <div className="contact-detail">
                  <img src={location_icon} alt="" /> <p>United Kingdom</p>
                </div>
             </div>
        </div>
        <form onSubmit={onSubmit} action="" className="contact-right">
            <label>Your Name</label>
            <input type="text" placeholder='Enter your name' name="name" />
            <label>Your Email</label>
            <input type="email" placeholder='Enter your Email' name="email" />
            <label>Write your message here</label>
            <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
            <button type='submit' className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  )
}
