import React from 'react';
import './Button.css';

const NumberButton = () => {
  return (

    <div className="whiteButtons">
      <div className="clearButton">
          <p> clear </p>
        </div>

      <div className="numberButtons">
        <p> 0 </p>
      </div>
    </div>
  );
};

export default NumberButton;