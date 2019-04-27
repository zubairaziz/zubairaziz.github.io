import React from 'react';
import Footer from '../layout/Footer';

// Web Dev
import WEBDEV1 from '../../img/webdev/notvoodoo.png';
import WEBDEV2 from '../../img/webdev/uptick.png';

// Design
import DESIGN1 from '../../img/design/design1.png';
import DESIGN2 from '../../img/design/design2.png';
import DESIGN3 from '../../img/design/design3.png';
import DESIGN4 from '../../img/design/design4.png';

// Photography
import PHOTO1 from '../../img/photography/photo1.jpg';
import PHOTO2 from '../../img/photography/photo2.jpg';
import PHOTO3 from '../../img/photography/photo3.jpg';
import PHOTO4 from '../../img/photography/photo4.jpg';
import PHOTO5 from '../../img/photography/photo5.jpg';
import PHOTO6 from '../../img/photography/photo6.jpg';
import PHOTO7 from '../../img/photography/photo7.jpg';
import PHOTO8 from '../../img/photography/photo8.jpg';
import PHOTO9 from '../../img/photography/photo9.jpg';
import PHOTO10 from '../../img/photography/photo10.jpg';

import photos from '../../data/photos.json';
import design from '../../data/design.json';
import webdev from '../../data/webdev.json';

const photosImg = [PHOTO1, PHOTO2, PHOTO3, PHOTO4, PHOTO5, PHOTO6, PHOTO7, PHOTO8, PHOTO9, PHOTO10];
const designImg = [DESIGN1, DESIGN2, DESIGN3, DESIGN4];
const webdevImg = [WEBDEV1, WEBDEV2];

const Projects = () => (
    <React.Fragment>
        <main id="projects">
            <div className="container">
                <h1 className="lg-heading">
                    My <span className="text-secondary">Projects</span>
                </h1>
                <h2 className="sm-heading">Things I've worked on...</h2>
                <small>
                    <span className="text-warning">
                        <i className="fas fa-exclamation-triangle" />
                    </span>{' '}
                    This page is still under construction. Check back later for updates.
                </small>
                <div>
                    <h3>Web Dev</h3>
                    <div className="project-grid">
                        {webdev.map((item, index) => (
                            <div className="project-item" key={index}>
                                <a href={item.href}>
                                    <img src={webdevImg[index]} alt={item.title} />
                                </a>
                                <a
                                    className="btn-light"
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <i className="fas fa-eye" /> {item.title}{' '}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <br />
                <div>
                    <h3>Graphic Design</h3>
                    <div className="project-grid">
                        {design.map((item, index) => (
                            <div className="project-item" key={index}>
                                <a href="#!">
                                    <img src={designImg[index]} alt={item.title} />
                                </a>
                                <a
                                    className="btn-light"
                                    href="#!"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <i className="fas fa-eye" /> {item.title}{' '}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <br />
                <div>
                    <h3>Photography</h3>
                    <small>*Each link opens a Google Photos album in a new page.</small>
                    <div className="project-grid">
                        {photos.map((item, index) => (
                            <div className="project-item" key={index}>
                                <a href={item.href} target="_blank" rel="noopener noreferrer">
                                    <img src={photosImg[index]} alt={item.title} />
                                </a>
                                <a
                                    href={item.href}
                                    className="btn-light"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <i className="fas fa-eye" /> {item.title}{' '}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </React.Fragment>
);

export default Projects;
