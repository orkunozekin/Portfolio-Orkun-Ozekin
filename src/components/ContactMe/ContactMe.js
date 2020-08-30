import React from 'react';
import './ContactMe.css';
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from 'react-icons/ai';

const ContactMe = () => {
    return (
        <section className="contact-wrapper" id="contact">
            <h2>Let's Connect!</h2>
            <ul className="contact-links">
                <li><a href="https://github.com/orkunozekin"><AiFillGithub className="contact-link"/></a></li>
                <li><a href="https://www.linkedin.com/in/orkun-ozekin/"><AiFillLinkedin className="contact-link"/></a></li>
                <li><a href="mailto:@orkunozekin@gmail.com"><AiOutlineMail className="contact-link"/></a></li>
            </ul>
        </section>
    )
}

export default ContactMe;