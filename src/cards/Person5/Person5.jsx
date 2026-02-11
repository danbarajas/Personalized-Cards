/*
 * ===========================================
 *  PERSON 5 — Square Card (1 col x 1 row)
 * ===========================================
 *  Make it your own!
 *  - Edit the JSX below to change your card's content
 *  - Edit Person5.css to change your card's styles
 */

import { useState } from 'react';
import '../cards.css';
import './Person5.css';


function Person5() {
  const colors = ["white", "red", "orange", "yellow", "green", "blue", "purple", "pink"]
  const [color, setColor] = useState("white");

  
  function changeColor() {
    if (color <= 7) {
      setColor(color + 1);
    }
    else {
      setColor(0);
    }
  }


  return (
    <div className="card square person5" onClick={changeColor} >
      <h1 className="person5-text" style={{color: colors[color]}} >Josephine</h1>
    </div>
  );
}

export default Person5;
