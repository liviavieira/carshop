import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const isBrowser = typeof window !== 'undefined';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

let mobile;
if(isBrowser) {
  mobile = window.innerWidth < 1024;
};

// Horizontal scroll
let windowWidth = window.innerWidth;
let xLength = document.querySelector(".section-wrapper").scrollWidth;
let scrollDistance = xLength - windowWidth;

if(!mobile) {
  document
    .querySelector(".horizontal-container")
    .style.height = `calc(${xLength}px - 350px)`;
  
  window.onscroll = function() {
    let scrollTop = window.pageYOffset;
    
    if (scrollTop <= scrollDistance) {
      document
        .querySelector(".section-wrapper")
        .style.transform = "translateX(-"+scrollTop+"px)"
    }
  }
}