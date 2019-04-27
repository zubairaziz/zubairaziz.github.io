import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Experience from './components/pages/Experience';
import Projects from './components/pages/Projects';

class App extends React.Component {
    state = {};

    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar />
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/experience" component={Experience} />
                    <Route path="/projects" component={Projects} />
                </div>
            </Router>
        );
    }
}

export default App;
