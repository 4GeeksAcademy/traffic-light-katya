import React from 'react';
import ReactDOM from 'react-dom';
import TrafficLight from './component/trafficLight';
import "../styles/index.css";

function setLight() {

};

function addPurple() {

};

// Render the TrafficLight component into the DOM
ReactDOM.render(<TrafficLight set = {setLight} addPurple = {addPurple}/>, document.querySelector('#app'));