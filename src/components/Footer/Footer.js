import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <p className="text" style={{ opacity: 0.3 }}>Design and Developed by Ankit Salian</p>
            <ul>
                <p className="text" style={{ opacity: 0.3 }}>Connect with me</p>
                <li><a className="icons" href="https://www.facebook.com/ankit.salian1/" target="_blank"><FacebookIcon /></a></li>
                <li><a className="icons" href="https://www.linkedin.com/in/ankit-salian-173945107/" target="_blank"><LinkedInIcon /></a></li>
                <li><a className="icons" href="https://github.com/AnkitSalian" target="_blank"><GitHubIcon /></a></li>
            </ul>
        </div>
    )
}

export default Footer;
