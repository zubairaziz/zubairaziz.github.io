import React from 'react';

function Footer() {
    return (
        <footer id="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-info">
                        <p>
                            This site is built with React.js, CSS Grid, CSS Animations and
                            FontAwesome Icons.
                        </p>
                        <small>&copy; 2019 Zubair</small>
                    </div>
                    <div className="footer-address">
                        <ul>
                            <li>
                                <strong>Zubair Aziz</strong>
                            </li>
                            <li> 185 Brooks Ave</li>
                            <li> Rochester, NY 14619</li>
                        </ul>
                    </div>
                    <div className="footer-contact">
                        <ul>
                            <li>
                                <span>
                                    <i className="fas fa-phone" />{' '}
                                    <a href="tel:+15852841150">(585) 284-1150</a>
                                </span>
                            </li>
                            <li>
                                <span>
                                    <i className="far fa-envelope" />{' '}
                                    <a href="mailto:zabaziz@u.rochester.edu">
                                        zabaziz@u.rochester.edu
                                    </a>
                                </span>
                            </li>
                            <li />
                            <li className="footer-icons">
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.linkedin.com/in/zubairabaziz/">
                                    <i className="fab fa-linkedin" />
                                </a>{' '}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://stackoverflow.com/users/8369042/zubair?tab=profile">
                                    <i className="fab fa-stack-overflow" />
                                </a>{' '}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://github.com/zubairaziz">
                                    <i className="fab fa-github" />
                                </a>{' '}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.facebook.com/zubair0496">
                                    <i className="fab fa-facebook" />
                                </a>{' '}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.instagram.com/zbr.aziz/">
                                    <i className="fab fa-instagram" />
                                </a>{' '}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.twitter.com/zbr_aziz/">
                                    <i className="fab fa-twitter" />
                                </a>{' '}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
