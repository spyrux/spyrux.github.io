import React, { Component } from 'react';
import logo from './profilepicture.png';
import Socials from './components/Socials';
import './Home.css';

class About extends Component {
    render() {
        return (
            <div className="Home">
            <header className="Home-header">
              <img src={logo} className="Home-logo" alt="logo" />
    
              <body className="Home-link">
                William Cui
            </body>
    
              <Socials />
            </header>
          </div>)
}
}
export default About