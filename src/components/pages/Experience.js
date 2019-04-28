import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Footer from '../layout/Footer';
import experiences from '../../data/experience.json';

const Experience = () => (
    <React.Fragment>
        <main id="experience">
            <div className="container">
                <h1 className="lg-heading">
                    My <span className="text-secondary">Work</span>
                </h1>
                <h2 className="sm-heading">Past experiences...</h2>
                <div className="timeline">
                    <ul>
                        {experiences.map((experience, index) => (
                            <li key={index}>
                                <ScrollAnimation
                                    className="timeline-item"
                                    delay={1000}
                                    offset={50}
                                    animateIn="fadeIn"
                                    initiallyVisible={index < 1}
                                    animatePreScroll={false}
                                    animateOnce>
                                    <time>{experience.time}</time>
                                    <h3>{experience.company}</h3>
                                    <h4>{experience.title}</h4>
                                    {experience.responsibilities.map((responsibility, i) => (
                                        <p key={i}>{responsibility}</p>
                                    ))}
                                </ScrollAnimation>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </main>
        <Footer />
    </React.Fragment>
);

export default Experience;
