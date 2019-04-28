import React from 'react';

// Portrait & Resume
import Portrait from '../../img/zubair2.jpg';
import PortraitWP from '../../img/zubair2.webp';
import Resume from '../../doc/Zubair_Developer.pdf';

import frontEnd from '../../data/front-end.json';
import backEnd from '../../data/back-end.json';
import tools from '../../data/tools.json';

// Front-End
import HTML5 from '../../img/logos/html5-logo.png';
import CSS3 from '../../img/logos/css3-logo.png';
import JS from '../../img/logos/javascript-logo.png';
import BOOTSTRAP from '../../img/logos/bootstrap-logo.png';
import BULMA from '../../img/logos/bulma-logo.png';
import REACT from '../../img/logos/react-logo.png';
import VUE from '../../img/logos/vue-logo.png';
import JQUERY from '../../img/logos/jquery-logo.png';
import SASS from '../../img/logos/sass-logo.png';

// Back-End
import PHP from '../../img/logos/php-logo.png';
import SQL from '../../img/logos/mysql-logo.png';
import APACHE from '../../img/logos/apache-logo.png';
import NPM from '../../img/logos/npm-logo.png';
import NODE from '../../img/logos/nodejs-logo.png';
import EXPRESS from '../../img/logos/express-logo.png';
import MONGODB from '../../img/logos/mongodb-logo.png';
import JAVA from '../../img/logos/java-logo.png';
import PYTHON from '../../img/logos/python-logo.png';
import C from '../../img/logos/c-logo.png';
import CPP from '../../img/logos/cpp-logo.png';
// Tools
import LINUX from '../../img/logos/linux-logo.png';
import BASH from '../../img/logos/bash-logo.png';
import GIT from '../../img/logos/git-logo.png';
import OFFICE from '../../img/logos/office-logo.png';
import LIBRE from '../../img/logos/libre-logo.png';
import PHOTOSHOP from '../../img/logos/photoshop-logo.png';
import INDESIGN from '../../img/logos/indesign-logo.png';
import GIMP from '../../img/logos/gimp-logo.png';
import SAS from '../../img/logos/sas-logo.png';

import Footer from '../layout/Footer';

const frontEndImg = [HTML5, CSS3, JS, BOOTSTRAP, BULMA, REACT, VUE, JQUERY, SASS];
const backEndImg = [PHP, SQL, APACHE, NPM, NODE, EXPRESS, MONGODB, JAVA, PYTHON, C, CPP];
const toolsImg = [LINUX, BASH, GIT, OFFICE, LIBRE, PHOTOSHOP, INDESIGN, GIMP, SAS];

const About = () => (
    <React.Fragment>
        <main id="about">
            <div className="container">
                <h1 className="lg-heading">
                    About <span className="text-secondary">Me</span>
                </h1>
                <h2 className="sm-heading">Learn more about me here...</h2>
                <div className="about-info">
                    <div style={{ textAlign: 'center' }}>
                        <picture>
                            <source srcSet={PortraitWP} type="image/webp" />
                            <source srcSet={Portrait} type="image/jpeg" />
                            <img
                                src={PortraitWP}
                                alt="Zubair Aziz"
                                style={{ maxWidth: '350px', height: 'auto' }}
                                className="bio-image"
                            />
                        </picture>
                        <a
                            href={Resume}
                            className="bio-resume btn-error"
                            target="_blank"
                            rel="noopener noreferrer">
                            <i className="fas fa-file-pdf" /> View My Resume
                        </a>
                    </div>
                    <div className="bio">
                        <h3 className="text-secondary">Bio</h3>
                        <p>
                            I'm from Subang, Malaysia. Currently studying Computer Science and
                            Economics at the University of Rochester, Rochester NY. I'm an aspiring
                            Full-Stack Web Developer, with experience developing in the LAMP stack
                            and the MERN stack. I enjoy taking photos, painting and cooking. I'm
                            also a huge advocate of free and open source software.
                        </p>
                    </div>
                </div>
                <div className="skills">
                    <h3 className="text-secondary">Skills</h3>
                    <h3>Front-End</h3>
                    <div className="skill-grid">
                        {frontEnd.map((item, index) => (
                            <div className="skill-item" key={index}>
                                <img
                                    src={frontEndImg[index]}
                                    alt={item.alt}
                                    className="skill-img"
                                    style={skillImgStyle}
                                />
                                <p>{item.title}</p>
                            </div>
                        ))}
                    </div>
                    <h3>Back-End</h3>
                    <div className="skill-grid">
                        {backEnd.map((item, index) => (
                            <div className="skill-item" key={index}>
                                <img
                                    src={backEndImg[index]}
                                    alt={item.alt}
                                    className="skill-img"
                                    style={skillImgStyle}
                                />
                                <p>{item.title}</p>
                            </div>
                        ))}
                    </div>
                    <h3>Other skills &amp; tools</h3>
                    <div className="skill-grid">
                        {tools.map((item, index) => (
                            <div className="skill-item" key={index}>
                                <img
                                    src={toolsImg[index]}
                                    alt={item.alt}
                                    className="skill-img"
                                    style={skillImgStyle}
                                />
                                <p>{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </React.Fragment>
);

const skillImgStyle = {
    maxWidth: '100px',
    height: 'auto',
};

export default About;
