import React, { Component } from 'react';
import FacebookLoginButton from './FacebookLoginButton';

export class Feed extends Component {
  render() {
    return (
      <div>
        Welcome to my feed. This is where the magic will happen
        <FacebookLoginButton />
        <div className="container">
          <h3 id="heading">Log in to view your profile</h3>
          <div className="profile" />
        </div>
      </div>
    );
  }
}

export default Feed;
