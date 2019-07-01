import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import HelloWorld from "./examples/HelloWorld";

function App() {
  const slides = [Slide1, Slide2, Slide3];

  //======= BEGIN aanpassingen opslaan in local storage =======
  const getSlideIndex = () => Number(localStorage.getItem("currentSlideIndex")) || 0;
  const [currentSlideIndex, setCurrentSlideIndex] = useState(getSlideIndex);

  useEffect(() => {
    localStorage.setItem("currentSlideIndex", currentSlideIndex);
  }, [currentSlideIndex]);

  function goToPrev() {
    if (slides.length > 0 && currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  }
  //======= END aanpassingen opslaan in local storage =======

  //======= BEGIN aanpassingen poll/toggle slide index =======
  //...
  //======= END aanpassingen poll/toggle slide index =======

  function goToNext() {
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  }

  function Navigation() {
    return (
      <div>
        <button onClick={goToPrev}>prev</button>
        <button onClick={goToNext}>next</button>
      </div>
    );
  }

  const Slide = slides[currentSlideIndex];

  return (
    <>
      <Navigation />
      <Slide />
    </>
  );
}

function Slide1() {
  return (
    <>
      <h1>Welcome to my REACT workshop!</h1>
      <p>Today I will learn you how to create a Hello World component :)</p>
    </>
  );
}

function Slide2() {
  return (
    <>
      <h1>Example 1</h1>
      <HelloWorld />
    </>
  );
}

function Slide3() {
  return (
    <>
      <h1>Thank you for attending my workshop!</h1>
      <p>and goodbye</p>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
