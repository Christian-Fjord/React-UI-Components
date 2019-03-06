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
      
      <container>
        <ActionButton className="actionButtons" text="clear" />
        <NumberButton className="redButton"
        text="x" />
        
      </container>
      
      <container>
      <NumberButton className='whiteButton' 
      text='7'/>
      <NumberButton className='whiteButton' 
      text='8'/>
      <NumberButton className='whiteButton' 
      text='9'/>
      <NumberButton className='redButton' 
      text='/'/>
      </container>

      <container>
      <NumberButton className='whiteButton' 
      text='4'/>
      <NumberButton className='whiteButton' 
      text='5'/>
      <NumberButton className='whiteButton' 
      text='6'/>
      <NumberButton className='redButton' 
      text='-'/>
      </container>

      <container>
      <NumberButton className='whiteButton' 
      text='1'/>
      <NumberButton className='whiteButton' 
      text='2'/>
      <NumberButton className='whiteButton' 
      text='3'/>
      <NumberButton className='redButton' 
      text='+'/>
      </container>

      <container>
        <ActionButton className="actionButtons" text="0" />
        <NumberButton className="redButton"
        text="=" />
      </container>
      
    </div>
  );
};

export default App;
