import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>puachengxuan.fp@gmail.com</h5>
            <a href="mailto:puachengxuan.fp@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Frederick Pua</h5>
            <a href="https://m.me/pua.chengxuanfrederick" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>81234567</h5>
            {/* whatsapp api */}
            <a
              href="https://api.whatsapp.com/send?phone=81191128"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
