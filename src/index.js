import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Horizontal scroll
let windowWidth = window.innerWidth;
let xLength = document.querySelector(".section-wrapper").scrollWidth;
let scrollDistance = xLength - windowWidth;

document
  .querySelector(".horizontal-container")
  .style.height = xLength + "px"

window.onscroll = function() {
  let scrollTop = window.pageYOffset;
  
  if (scrollTop <= scrollDistance) {
    document
      .querySelector(".section-wrapper")
      .style.transform = "translateX(-"+scrollTop+"px)"
  }
}