import React from 'react';
import imageHead from '../resources/images/me.png';

const Header = () => (
  <header className="header">
    <div className="flex-container">
      <h1 id="header-title">Thomas Neal</h1>
      <div>Home</div>
      <div>About</div>
      <div>Posts</div>

      <div className="flex-item" id="header-list">
        <div>
          <a href="https://www.facebook.com/thomas.b.neal" rel="me">
            <i className="fab fa-facebook big-icon" />
          </a>
        </div>
        <div>
          <a href="https://twitter.com/nealthom" rel="me">
            <i className="fab fa-twitter-square big-icon" />
          </a>
        </div>
        <div>
          <a href="https://github.com/nealthom" rel="me">
            <i className="fab fa-github-square big-icon" />
          </a>
        </div>
      </div>

      <div
        className="header-image flex-item"
        style={{
          background: `center / cover url(${imageHead})`
        }}
      />
    </div>
  </header>
);

export default Header;
