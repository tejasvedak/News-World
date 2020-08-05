import React, { Component } from 'react';
import './App.css';
import Search from './Search.js';
import './Search.css';
import Footer from './Footer.js';
import './Footer.css';
import logo from './images/newsworld.png';
import news from './images/newsworld.png';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="appHeader">
          <img className="appLogo" src={logo} alt="React Logo" />

          <div className="title">
            <h1>News World</h1>
            <h4>
              Powered by
              <a href="https://newsapi.org/"> News API </a>🔥{' '}
            </h4>
          </div>

          <img className="scriptLogo" src={news} alt="Javascript Logo" />
        </div>
        <Search default="the-times-of-india" />
        <Footer />
      </div>
    );
  }
}

export default App;
