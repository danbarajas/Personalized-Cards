/*
 * ===========================================
 *  PERSON 6 — Square Card (1 col x 1 row)
 * ===========================================
 *  Make it your own!
 *  - Edit the JSX below to change your card's content
 *  - Edit Person6.css to change your card's styles
 */

import '../cards.css';
import './Person6.css';
import { useState } from 'react';





function Person6() {

  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];

  const [color, setColor] = useState(0);
  function ButtonPressed() {
    console.log("Button Pressed");
    setColor(color + 1);
    if (color >= colors.length) {
      setColor(0);
    }
    clickbtn.style.backgroundColor = colors[color];
  }


  return (
    <div className="card square person6">
      <p style={{ color: colors[color], fontSize: '1.5rem', fontWeight: 'bold' }}>
      Brian
      </p>
      <button className="clickbtn" onClick={(ButtonPressed)} >
        Click Mee
      </button>
    </div>
  );
}

export default Person6;
