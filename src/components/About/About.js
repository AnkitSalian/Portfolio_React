import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import GetAppIcon from '@material-ui/icons/GetApp';
import './About.css';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

const About = () => {

    const classes = useStyles();

    return (
        <section className="about">
            <div className="contentBx">
                <h2 className="heading" data-aos="fade-up">About Me</h2>
                <p className="text" data-aos="fade-up">Experienced Software Developer adept in bringing forth expertise in designing, development, testing and maintenance of software applications. Equipped with a diverse and promising skill-set. Proficient in various platforms, languages, and embedded systems. Experienced with the latest cutting edge development tools and procedures. Able to effectively self-manage during independent projects, as well as collaborate as part of a productive team.</p>
                <br />
                <br />
                <h2 className="heading" data-aos="fade-up">Contact Me</h2>
                <p className="text" data-aos="fade-up">Ankit Salian</p>
                <p className="text" data-aos="fade-up">Ghaghara-29, Second Floor, Anushakti Nagar, BARC Colony, Trombay.</p>
                <p className="text" data-aos="fade-up">Mumbai Maharashtra, 400094</p>
                <p className="text" data-aos="fade-up">+91 9869808279</p>
                <p className="text" data-aos="fade-up">ankitsalian9@gmail.com</p>
                <div className="resume-button" data-aos="fade-up">
                    <a href="https://drive.google.com/file/d/1M2wUIMgt9u5lGwdredE2j_x-4dyDl23h/view?usp=sharing" target="_blank">
                        <Button
                            variant="contained"
                            startIcon={<GetAppIcon />}
                            type="submit"
                            className="download"
                        >
                            Download Resume
                        </Button>
                    </a>
                </div>
            </div>
            <div className="imgBx" data-aos="fade-up">

            </div>
        </section>
    )
}

export default About;
