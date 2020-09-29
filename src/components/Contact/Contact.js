import React, { useState } from 'react';
import RoomIcon from '@material-ui/icons/Room';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Contact.css';

const Contact = () => {

    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [message, setMessage] = useState('');

    const msgContent = () => {
        return "Hi,\n" + message + "\nThanks and Regards,\n" + name + "\n" + email + "\n" + mobile;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        window.open(`mailto:ankitsalian9@gmail.com?subject=${subject}&body=${msgContent()}`);
    }

    return (
        <section className="contact">
            {/* <h2 className="heading">Contact Me</h2> */}
            {/* <p className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam debitis, reprehenderit repudiandae et officia distinctio tenetur rerum reiciendis quidem, delectus explicabo quisquam ipsam cumque ab voluptatum, ipsum exercitationem iusto id?</p> */}
            <div className="contact__container">
                <div className="contact__info" data-aos="fade-up">
                    <div>
                        <h2>Contact Info</h2>
                        <ul className="info">
                            <li>
                                <span><RoomIcon className="contact__icons" /></span>
                                <span>Ghaghara-29, Second Floor, Anushakti Nagar,<br />
                            BARC Colony, Trombay. <br />
                            Mumbai-400094, Maharashtra, India</span>
                            </li>
                            <li>
                                <span><MailOutlineIcon className="contact__icons" /></span>
                                <span>ankitsalian9@gmail.com</span>
                            </li>
                            <li>
                                <span><PhoneIcon className="contact__icons" /></span>
                                <span>+91 9869808279</span>
                            </li>
                        </ul>
                    </div>
                    <ul className="sci">
                        <li><a className="icons" href="https://www.facebook.com/ankit.salian1/" target="_blank"><FacebookIcon className="contact__social" /></a></li>
                        <li><a className="icons" href="https://www.linkedin.com/in/ankit-salian-173945107/" target="_blank"><LinkedInIcon className="contact__social" /></a></li>
                        <li><a className="icons" href="https://github.com/AnkitSalian" target="_blank"><GitHubIcon className="contact__social" /></a></li>
                    </ul>

                </div>
                <div className="contact__form" data-aos="fade-up">
                    <form id="contactForm" name="contactForm">
                        <h2>Send Message</h2>
                        <div className="form__box">
                            <div className="input__box w50">
                                <input type="text" name="contactName" value={name} onChange={e => setName(e.target.value)} />
                                <span>Name</span>
                            </div>
                            <div className="input__box w50">
                                <input type="text" name="contactSubject" value={subject} onChange={e => setSubject(e.target.value)} />
                                <span>Subject</span>
                            </div>
                            <div className="input__box w50">
                                <input type="text" name="contactEmail" value={email} onChange={e => setEmail(e.target.value)} />
                                <span>Email Address</span>
                            </div>
                            <div className="input__box w50">
                                <input type="text" name="contactMobile" value={mobile} onChange={e => setMobile(e.target.value)} />
                                <span>Mobile Number</span>
                            </div>
                            <div className="input__box w100">
                                <textarea name="contactMessage" value={message} onChange={e => setMessage(e.target.value)} ></textarea>
                                <span>Write your message</span>
                            </div>
                            <div className="input__box w100">
                                <input type="submit" value="Send" onClick={handleSubmit} />
                                {/* <span>Write your message</span> */}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;
