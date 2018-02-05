import React from 'react';
import '../App.css';
require('bootstrap/dist/css/bootstrap.css');

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import NavBar from '../navbar';
import Header from '../header';
import Body from '../body';
// import Video from '../video';
// import Footer from '../footer';

storiesOf('NavBar', module)
  .add('myNavBar', () => <NavBar/>)

storiesOf('Header', module)
  .add('myHeader', () => <Header/>)

storiesOf('Body', module)
  .add('myBody', () => <Body/>)

// storiesOf('Footer', module)
//     .add('myFooter', () => <Footer/>)
//
// storiesOf('Video', module)
//     .add('myVideo', () => <Video/>)
