/*
 * ===========================================
 *  Dominic - 2x1 Square
 * ===========================================
 *  Here is an example square to read from.
 */


// Our imports
import '../cards.css';
import './Dominic.css';
// For variables
import { useState } from 'react';




// We are creating a function for App.jsx to render
function Dominic() {



  // 'useState' is a React Hook that allows you to add state—data 
  // that changes over time and triggers component re-renders when updated.
  // 'count' is the actual variable, and 'setCount' is the function called to
  // update the count and rerender the component. 0 is the initial value.
  const [count, setCount] = useState(0);



  // A custom function called when a button is pressed.
  function Button() {

    // We can log to the web console. This is VERY useful when debugging.
    // To see this, go to your console on your browser (CTRL + SHIFT + i).
    console.log("Button pressed.")

    // Increase by one
    setCount(count + 1)

  }


  // Return value is HTML (what you see) You can only return ONE 
  // container, everything else must be inside the parent.
  return (
    <div className="dominic card horizontal ">

      {/* This is how HTML comments look. */}

      {/* I want my name and count on the top on the same line, so I put
      both inside a div together. */}
      <div className="topRow">
        <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>Dominic</h1> {/* Example of inline-styling */}

        <p>{count}</p>
      </div>

      <div className="bottomRow">
        {/* When the button is clicked, the 'Button' function will be called. */}
        <button onClick={Button} className="button"> Click me! </button>
      </div>
      
      


      

    </div>
  );
}

export default Dominic;
