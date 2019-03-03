import React from 'react';
import './Button.css';

const ActionButton = () => {
  return (
    <div className="symbolButtons">
      
      <div className="actionButtons">
        <div className="mathButton">
          <p> / </p>
        </div>

        <div className="mathButton">
          <p> X </p>
        </div>

        <div className="mathButton">
          <p> - </p>
        </div>

        <div className="mathButton">
          <p> + </p>
        </div>

        <div className="mathButton">
          <p> = </p>
        </div>
      </div>
    </div>

    
  );
};

export default ActionButton;