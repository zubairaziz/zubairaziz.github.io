import React from 'react';
import TextLoop from 'react-text-loop';

const text = ['Web Developer', 'Programmer', 'Designer'];

const Home = () => (
    <main id="home">
        <div className="container">
            <h1 className="lg-heading">
                Zubair <span className="text-secondary">Aziz</span>
            </h1>
            <h2 className="sm-heading">{<TextLoop delay={500} children={text} />}</h2>
            <div className="icons">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/zubairabaziz/">
                    <i className="fab fa-linkedin fa-2x" />
                </a>{' '}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://stackoverflow.com/users/8369042/zubair?tab=profile">
                    <i className="fab fa-stack-overflow fa-2x" />
                </a>{' '}
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/zubairaziz">
                    <i className="fab fa-github fa-2x" />
                </a>{' '}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/zubair0496">
                    <i className="fab fa-facebook fa-2x" />
                </a>{' '}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/zbr.aziz/">
                    <i className="fab fa-instagram fa-2x" />
                </a>{' '}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.twitter.com/zbr_aziz/">
                    <i className="fab fa-twitter fa-2x" />
                </a>
            </div>
        </div>
    </main>
);

export default Home;
