/*
 * ===========================================
 *  PERSON 2 — Vertical Card (1 col x 2 rows)
 * ===========================================
 *  Make it your own!
 *  - Edit the JSX below to change your card's content
 *  - Edit Person2.css to change your card's styles
 */

import '../cards.css';
import './Person2.css';
import { useState } from 'react';

function Person2() {
  const [cardActive, setCardActive] = useState(false);

/* Custom button function */
function Button() {

  console.log("Button pressed.")

  setCardActive(true);
  setTimeout(() => setCardActive(false), 300); // Reset after 200ms

}


  return (
    <div className={`card vertical person2 ${cardActive ? 'active' : ''}`}>
      <div className="topRow">
        <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>Noah</h1>
      </div>

      <div className="bottomRow">
        <button onClick={Button} className="button"> Click me! </button>
      </div>
    </div>
  );
}

export default Person2;
