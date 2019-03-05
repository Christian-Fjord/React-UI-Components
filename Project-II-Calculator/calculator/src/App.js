import React from 'react';

import './App.css';
import './components/ButtonComponents/Button.css';
import './components/DisplayComponents/Display.css';

import ActionButton from "./components/ButtonComponents/ActionButton.js";

import NumberButton from "./components/ButtonComponents/NumberButton.js";

import CaculatorDisplay from "./components/DisplayComponents/CalculatorDisplay.js";

const App = () => {
  return (
    <div className="container">
      <CaculatorDisplay />
      <ActionButton />
      <NumberButton />
      
    </div>
  );
};

export default App;
