import React from 'react'
import "./contact.css"
import {MdOutlineMail} from "react-icons/md";
import {RiMessengerLine} from "react-icons/ri";
import {ImWhatsapp} from "react-icons/im";
import {useRef} from "react";
import emailjs from "emailjs-com"

const Contact = () => {
  const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f2uueve', 'service_f2uueve', form.current, 't-iv1uGvAD4Cc2Pxy')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__option">
          <MdOutlineMail className="contact__option-icon"/>
          <h4>Email</h4>
          <h5>deepthih6@gmail.com</h5>
          <a href="mailto:deepthih6@gmail.com">Send a message</a>
        </article>
        <article className="contact__option">
          <RiMessengerLine className="contact__option-icon"/>
          <h4>Messenger</h4>
          <h5>Deepthi Hariraman</h5>
          <a href="https://www.google.com">Send a message</a>
        </article>
        <article className="contact__option">
          <ImWhatsapp className="contact__option-icon"/>
          <h4>WhatsApp</h4>
          <h5>+91 1234567890</h5>
          <a href="https://api.whatsapp.com/send?phone=+911234567890">Send a message</a>
        </article>
        </div>
        {/* End Of Contact Options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder= "Your Email" required/>
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact