import React, { Component } from 'react';

export class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to my homepage!</h1>
        <p>
          This page is under heavy construction. Check out my{' '}
          <a className="home-link" href="http://www.thomasbneal.com">
            OldPage
          </a>
        </p>
      </div>
    );
  }
}

export default Home;
