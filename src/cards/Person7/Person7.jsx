/*
 * ===========================================
 *  PERSON 7 — Horizontal Card (2 cols x 1 row)
 * ===========================================
 *  Make it your own!
 *  - Edit the JSX below to change your card's content
 *  - Edit Person7.css to change your card's styles
 */

import '../cards.css';
import './Person7.css';
import profile from "./Images/MyGodlyVersion.png"

function Person7() {
  return (
    <div className="card horizontal person7">
      <img className="image" src={profile}></img>
      <div>
        <h1>{"Andres :)"}</h1>
        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
          <li>I like Roblox</li>
          <li>I like Code</li>
          <li>I like Anime</li>
        </ul>

      </div>
      
    </div>
  );
}

export default Person7;
