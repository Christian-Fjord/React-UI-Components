import React from 'react';
import './Button.css';

const NumberButton = () => {
  return (

    <div className="whiteButtons">
      <div className="clearButton">
          <p> clear </p>
        </div>

      <div className="numberButtonsTopRow">
        <p> 7</p>
        <p> 8 </p>
        <p> 9 </p>
      </div>

      <div className="numberButtonsMiddleRow">
        <p> 4 </p>
        <p> 5 </p>
        <p> 6 </p>
      </div>

      <div className="numberButtonsBottomRow">
        <p> 1 </p>
        <p> 2 </p>
        <p> 3 </p>
      </div>

      <div className="bottomNumber">
      <p> 0 </p>
      </div>
    </div>
  );
};

export default NumberButton;