import '../cards.css';
import './Dan.css';
import { useState, useEffect } from 'react';

function Dan() {
  // A bunch of color pairs to swap between on click. Changes background, text, and shadow color.
  const colors = [["#F94E56", "#343036"], ["#343036", "#F94E56"], 
                  ["#23F0C7", "#EF767A"], ["#EF767A", "#23F0C7"], 
                  ["#2D7DD2", "#97CC04"], ["#97CC04", "#2D7DD2"],
                  ["#2D3142", "#BFC0C0"], ["#BFC0C0", "#2D3142"],
                  ["#F6F7EB", "#E94F37"], ["#E94F37", "#F6F7EB"]];
  // Using useState to keep track of which color scheme we're on. The card will
  // automatically re-render when this changes. The initial value is a random index
  // to pick a different pair of colors every time the page is refreshed.
  const [colorIndex, setColorIndex] = useState(Math.floor(Math.random() * colors.length));

  // Swaps to the next color pair when the card is clicked. I made use of CSS variables 
  // so I only have to change the colors in one place. Check Dan.css to see where the 
  // variables are used.
  function swapBackground() {
    const root = document.documentElement;
    root.style.setProperty("--dan-primary", colors[colorIndex][0]);
    root.style.setProperty("--dan-secondary", colors[colorIndex][1]);
    setColorIndex((colorIndex + 1) % colors.length); // % loops back to the first color when the end is reached
    console.log(`Swapped to color pair #${colorIndex}`);
  }

  // useEffect runs a function whenever a given value changes. Since I left the 
  // dependency array empty, this will only run once when everything is first 
  // rendered. I used this to set the initial colors I got from the random index above.
  useEffect(() => {
    swapBackground();
  }, []);

  // I made Name and NameCol components to avoid repeating code and make things cleaner.
  // This would be the same as just writing everything in the last return statement, 
  // but it's a lot less repetitive this way.
  function Name() {
    return (
      <h1 className="name">
        <span className="capital">D</span>AN
        <span className="capital">B</span>ARAJAS
      </h1>
    );
  }

  function NameCol() {
    return (
      <div className="name-col">
        <Name />
        <Name />
        <Name />
      </div>
    );
  }

  // This is the return value that renders the actual card. 
  // I set the onClick event to call the swapBackground function, 
  // so the colors will change whenever the card is clicked.
  return (
    <div id="dan-card" className="card horizontal dan" onClick={swapBackground}>
      {/* I need two columns of text to make the scrolling animation look seamless.
          Check .name-col in Dan.css to see how the animation works.*/}
      <NameCol />
      <NameCol />
    </div>
  );
}

export default Dan;
