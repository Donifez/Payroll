import React from 'react';

import './App.css';
import First  from "./stageOne";
import Second from "./stageTwo";
import Three from "./stageThree";
import  Step from "./steps";
import Sliders from "./sliders";
import Footer from "./footer";
function App() {
  return (
    <div className="App">
    <First/>
    <Second/>
    <Three/>
    <Step/>
    <Sliders/>
    <Footer/>
    </div>
  );
}

export default App;
