import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footerSection">

        <span className="heart">
          Made with
          <i className="fa fa-heart" aria-hidden="true" />
          <a href="https://www.linkedin.com/in/tejasvedak/" target="_blank" rel="noopener noreferrer">
            by Tejas
          </a>
        </span>

        <a className="smoothScroll" href="#">
          <i className="fa fa-2x fa-arrow-up" aria-hidden="true" />
        </a>
        
      </div>
    );
  }
}

export default Footer;
