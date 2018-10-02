import React, { Component } from 'react';

export class FacebookLoginButton extends Component {
  componentDidMount() {
    window.fbAsyncInit = () => {
      window.FB.init({
        appId: '2165295396835744',
        cookie: true,
        xfbml: true,
        version: 'v3.1'
      });

      window.FB.Event.subscribe('auth.statusChange', response => {
        if (response.authResponse) {
          // this.checkLoginState();
          // console.log('Welcome!  Fetching your information.... ');
          // window.FB.api('/me', function(response) {
          //   console.log('Good to see you, ' + response.name + '.');
          // });
        } else {
          console.log('User cancelled login or did not fully authorize.');
        }
      });

      window.FB.AppEvents.logPageView();
    };

    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }

  statusChangeCallback(response) {
    if (response.status === 'connected') {
      this.testAPI();
    } else if (response.status === 'not_authorized') {
      console.log(
        '[FacebookLoginButton] Person is logged into Facebook but not your app'
      );
    } else {
      console.log('[FacebookLoginButton] Person is not logged into Facebook');
    }
  }

  checkLoginState() {
    window.FB.getLoginStatus(
      function(response) {
        this.statusChangeCallback(response);
      }.bind(this)
    );
  }

  login() {
    window.FB.login(this.checkLoginState(), {
      scope: 'public_profile,email,user_posts,user_friends, user_status'
    });
  }

  testAPI() {
    window.FB.api('/me?fields=id,name,email,photos', function(response) {
      if (response && !response.error) {
        //buildProfile()
        console.log('[FacebookLoginButton] Successful login for: ', response);
      }
    });

    window.FB.api('/me/feed', function(response) {
      if (response && !response.error) {
        //buildFeed()
        console.log('[FacebookLoginButton] Successful login for: ', response);
      }
    });
  }

  render() {
    return (
      <button className="btn btn-block btn-fb" onClick={() => this.login()}>
        Continue with Facebook
      </button>
    );
  }
}

export default FacebookLoginButton;
