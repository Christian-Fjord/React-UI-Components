import React from 'react';
import './App.css';

import ActionButton from "./components/ButtonComponents/ActionButton.js";

import NumberButton from "./components/ButtonComponents/NumberButton.js";

import CaculatorDisplay from "./components/DisplayComponents/CalculatorDisplay.js";

const App = () => {
  return (
    <div>
      <ActionButton />
      <NumberButton />
      <CaculatorDisplay />
    </div>
  );
};

export default App;
