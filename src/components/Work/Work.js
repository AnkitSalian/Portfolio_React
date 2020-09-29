import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import LanguageIcon from '@material-ui/icons/Language';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Work.css';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

const Work = () => {

    const classes = useStyles();

    return (
        <section className="work">
            <h2 className="heading" data-aos="fade-up">CHECK OUT SOME OF MY WORKS</h2>
            {/* <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit natus corporis repellat quidem molestiae error at, nulla illo ullam, incidunt in placeat nihil numquam repudiandae quaerat, laborum ipsa aut voluptate.</p> */}
            <br />
            <div className="project__work">
                <div className="bus__work" data-aos="fade-up">
                    <h3>Admin Dashboard</h3>
                    <p>Application has two parts viz backend and frontend. Backend is build in Node.js with a Posgres database and used Express.js for routing. Frontend is build on React.js. Application is used to track status of the students enrolled in the exam, top and bottom performers and provided the results graphically using FusionCharts with React.js</p>
                </div>
                <div className="bus__work" data-aos="fade-up">
                    <h3>Proctor WebRTC</h3>
                    <p>Used React.js to build and integrated with WebRTC and RecordRTC and the inbuild Socket.IO channel provided by WebRTC. Here proctor means the moderator who will create the video stream channel for the rest of the students to join. Every time when a student join his video stream will be added in Proctors dashboard, so he or she moderates how the student is performing for the test.</p>
                </div>
                <div className="bus__work" data-aos="fade-up">
                    <h3>ESign</h3>
                    <p>A REST application build using Spring MVC to access services exposed by NSDL to consume ESign webservice. The entire projects can be split into two parts viz, generating OTP for a valid aadhar number and creating the signed document against it</p>
                </div>
                <div className="bus__work" data-aos="fade-up">
                    <h3>Payment Gateway (PGS)</h3>
                    <p>A REST application build using Node.js to create a Payment Gateway System, here we are giving access to users to pay there loan amount either one of the two vendors viz, Billdesk or Paytm.</p>
                </div>
            </div>
            <h2 className="heading personal" data-aos="fade-up">CHECK OUT SOME OF MY PERSONAL SIDE PROJECTS</h2>
            <div className="project__work">
                <div className="bus__work" data-aos="fade-up">
                    <h3>ECommerce Website</h3>
                    <p>Application has been integrated with reactjs, firebase, redux and stripe API. Firebase is used for google authentication and storing the list of users who signed up. Redux is used for better state management. Application starts with the category options and browse on individual category and user may add products to the cart and proceed with checkout. Stripe API is used for payment, currently mentioned a fake credit card through which payment can be made in website. This application is up and running in Heroku.</p>
                    <div className="work__list">
                        <a href="https://crwn-ankit.herokuapp.com/" target="_blank">
                            <Button
                                variant="contained"
                                startIcon={<LanguageIcon />}
                                type="submit"
                                className="download"
                                style={{ width: '150px' }}
                            >
                                Application
                            </Button>
                        </a>
                        <a className="github__proj" href="https://github.com/AnkitSalian/E-Commerce_Website" target="_blank">
                            <Button
                                variant="contained"
                                startIcon={<GitHubIcon />}
                                type="submit"
                                className="download"
                                style={{ width: '150px' }}
                            >
                                GitHub
                            </Button>
                        </a>
                    </div>
                </div>
                <div className="bus__work" data-aos="fade-up">
                    <h3>Amazon Clone</h3>
                    <p>Created Amazon clone using Reactjs for frontend, context api to handle dynamic state changes. Firebase is used for authentication and storing values in firestore. Application start with showing a descriptive category to shop for, user can select, add or remove products basket would be updated accordingly. For payment we have integrated with stripe with a dummy card which allows the transaction</p>
                    <div className="work__list">
                        <a href="https://challenge-27088.web.app/" target="_blank">
                            <Button
                                variant="contained"
                                startIcon={<LanguageIcon />}
                                type="submit"
                                className="download"
                                style={{ width: '150px' }}
                            >
                                Application
                            </Button>
                        </a>
                        <a className="github__proj" href="https://github.com/AnkitSalian/Amazon" target="_blank">
                            <Button
                                variant="contained"
                                startIcon={<GitHubIcon />}
                                type="submit"
                                className="download"
                                style={{ width: '150px' }}
                            >
                                GitHub
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
            {/* <div className="imgBx">
                <img src="/images/brand1.png" alt="brand1" />
                <img src="/images/brand2.png" alt="brand2" />
                <img src="/images/brand3.png" alt="brand3" />
                <img src="/images/brand4.png" alt="brand4" />
            </div> */}
        </section>
    )
}

export default Work;
