// this should be at the top of every component file
import React from 'react';
import "./App.css";
// const styleObj = {
//   color: "red",
//   backgroundColor: "white"
// }
// const Header = ({name = 'stranger', time = 'week'}) =>
// <div>
  // <h1>Hello {name}!</h1>
  // <p>Welcome {name}, how is your {time}?</p>
  // <p>This is how react works</p>
// </div>

const Header = ({projects = 'Recent Projects'}) =>
  <div>
    <h1>{ projects }</h1>
  </div>

export default Header
