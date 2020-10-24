import React, { Component } from 'react';
import resume from './William_Cui_Resume.pdf';

import './Home.css';

class Resume extends Component {
    render() {
        return (
          <body className = 'Home-link'>
          <iframe src={resume} width="100%" height="670px">
          </iframe>
        </body>)
}
}
export default Resume