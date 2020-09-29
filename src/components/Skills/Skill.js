import React from 'react';
import './Skill.css';

const Skill = () => {
    return (
        <section className="skill">
            <div className="contentBx">
                <h1 data-aos="fade-up">Technology I have worked on</h1>
                <br />
                {/* <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quos quaerat cupiditate fugit sequi quia, aspernatur eligendi quisquam magni harum iure ipsam qui, vero vitae architecto perspiciatis delectus maiores nesciunt!</p> */}
            </div>
            {/* <div className="imgBx">
                <img src="/images/tech.png" alt="tech"/>
            </div> */}
            <div className="wrap" data-aos="fade-up">
                <div className="cube">
                    <img style={{ width: '80%', height: '70%' }} src="/images/java.png" alt="java-image" />
                    <img style={{ width: '80%', height: '70%' }} src="/images/node3.png" alt="node-image" />
                    <img style={{ width: '80%', height: '70%' }} src="/images/python2.png" alt="python-image" />
                    <img style={{ width: '80%', height: '70%' }} src="/images/react.png" alt="react-image" />
                    <img style={{ width: '80%', height: '70%' }} src="/images/docker3.png" alt="docker-image" />
                    <img style={{ width: '80%', height: '70%' }} src="/images/mongo2.png" alt="mongo-image" />
                </div>
            </div>

        </section>
    )
}

export default Skill;
