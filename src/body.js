// this should be at the top of every component file
import React from 'react';
import "./App.css";
import snake from "./Snake_Emoji.jpg";
require('bootstrap/dist/css/bootstrap.css');

const cardText = {
  width: "18rem",
  color: "slateGrey"
}

// const Image = ({source}) =>
// <img src={"./public/Snake_Emoji.jpg"}/>

const Body = () =>

  <div className="card">
  <img className="card-img-top" id="snake" src={snake} alt="snake"></img>
  <div className="card-body">
    <h5 className="card-title">Snake!</h5>
    <p className="card-text" style={cardText}>For my first Web Development project, I created a version of the classic game, Snake, using only HTML, CSS, and JavaScript. This project helped solidify my DOM manipulation skills, and shed some light on what it takes to make even a simple game.</p>
    <a href="http://www.daviadenisco.com/snake/" target="_blank" className="btn btn-primary">Play Snake!</a>
  </div>
</div>

export default Body
/*
  <div>
    <h1 style={styleObj}>This is the body.js file.</h1>
  </div>
  */
/*
    <h3>Hi. I'm Gilly.</h3>
    */
