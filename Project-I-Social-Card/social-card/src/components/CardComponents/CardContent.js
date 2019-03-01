import React from 'react';

import './Card.css';


function CardContent() {
  return (
    <div className="cardContent">
      <p className="cardHeaderOne"> Get Started with React</p>
      <p className="cardParagraph"> React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>

      <a src="https://www.reactjs.org"> reactjs.org</a>
    </div>
  );
}

export default CardContent;