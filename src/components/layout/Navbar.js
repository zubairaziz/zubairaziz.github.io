import React from 'react';
import { Link } from 'react-router-dom';
import Portrait from '../../img/zubair.jpg';
import PortraitWP from '../../img/zubair.webp';

class Navbar extends React.Component {
    render() {
        return (
            <header>
                <div className="menu-btn">
                    <div className="btn-line" />
                    <div className="btn-line" />
                    <div className="btn-line" />
                </div>
                <nav className="menu">
                    <div className="menu-brand">
                        <div className="portrait">
                            <picture style={{ maxWidth: '300px', height: 'auto' }}>
                                <source srcSet={PortraitWP} type="image/webp" />
                                <source srcSet={Portrait} type="image/jpeg" />
                                <img src={PortraitWP} alt="Zubair Aziz" />
                            </picture>
                        </div>
                    </div>
                    <ul className="menu-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                About Me
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/experience">
                                Experience
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/projects">
                                Projects
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Navbar;
