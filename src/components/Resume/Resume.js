import React from 'react';
import './Resume.css';

const Resume = () => {
    return (
        <section className="resume">
            <div className="education__container" data-aos="fade-up">
                <h3 className="heading">Education</h3>
                <div className="education">
                    <h2 className="heading">Yadavrao Tasgaonkar Institute of Engineering & Technology</h2>
                    <h4>Bachelor of Engineering (Electronics) • June 2015</h4>
                    <p className="text">Scored 71.70% in final semester and first class in all semesters</p>
                </div>
            </div>

            <hr />

            <h2 className="heading" data-aos="fade-up">Work</h2>

            <div className="container">
                <div className="resumeBx" data-aos="flip-right">
                    <div className="card middle">
                        <div className="jp__front">
                            <img src="/images/jpm.png" alt="icon1" />
                            {/* <h2>Design</h2> */}
                        </div>
                        <div className="jp__back">
                            <div className="back">
                                <div className="back-content middle">
                                    <h2 className="profile">SDE</h2>
                                    <h4 className="year">April 2020 - Present</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="resumeBx" data-aos="flip-right">
                    <div className="card middle">
                        <div className="assesshub__front">
                            <img src="/images/asesshub.jpg" alt="icon2" />
                            {/* <h2>Development</h2> */}
                        </div>
                        <div className="assesshub__back">
                            <div className="back">
                                <div className="back-content middle">
                                    <h2 className="profile">Software Engineer</h2>
                                    <h4 className="year">May 2019 - April 2020</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="resumeBx" data-aos="flip-right">
                    <div className="card middle">
                        <div className="tcs__front">
                            <img src="/images/tata-logo.png" alt="icon3" />
                            {/* <h2>Branding</h2> */}
                        </div>
                        <div className="tcs__back">
                            <div className="back">
                                <div className="back-content middle">
                                    <h2 className="profile">System Engineer</h2>
                                    <h4 className="year">February 2015 - April 2019</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume
