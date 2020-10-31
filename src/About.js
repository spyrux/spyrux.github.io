import React, { Component } from 'react';
import logo from './profilepicture.png';
import Socials from './components/Socials';
import './Home.css';
import picture from './aboutpic.png'

class About extends Component {
    render() {
        return (
            <div className="body-header">
           
            <header className="body-text">
            <img src={picture} className="about-logo" alt="logo" /> 
            <body className = "about-body">
              Hello there, my name is William Cui <br></br>
              and I am currently enrolled in a B.Sc in Mathematics <br></br>
              at the University of British Columbia with an expected<br></br>
              graduation of May 2022. I am  currently searching for <br></br>
              software engineering internships!<br></br>
              <br></br>
              <br></br>
            
              I have experience in full-stack application development <br></br>
              and I am currently exploring other avenues of computer science, <br></br>
              such as machine learning, data science, and quantitative analysis.<br></br>

              <br></br>
              <br></br>
              In my spare time, I enjoy making music, working out, and gaming.<br></br>
              I can also speak three languages: English, French, and Chinese!
            </body>
             
              
            
            <pre>


                
            </pre>
      
            </header>
          </div>)
}
}
export default About