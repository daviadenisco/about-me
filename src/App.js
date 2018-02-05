import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import { Player } from 'video-react';

import Header from './header';
// import Footer from './footer';
import Body from './body';
import NavBar from './navbar';
// import Video from './video';

// require('bootstrap/dist/css/bootstrap.css');

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Header />
        <Body />
        {/* <Video />
        <Footer /> */}
      </div>
    );
  }
}

export default App;
/*
<h1>React Storybook Practice</h1>
<Header name="Davia" />
*/
