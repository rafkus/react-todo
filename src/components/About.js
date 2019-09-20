import React from "react";

const style = {
  width: 400 + "px"
};

const About = () => {
  return (
    <div>
      <h1>notes</h1>
      <p style={style}>
        Assume that todo "title" is unique value. There is no validation if it
        really is. In real world application it would be some unique ID from DB.
      </p>
      <p>I focused only at logic. It is clean React solution. Please check the <a href="#" target="_blank">source</a></p>
      <hr />
    </div>
  );
};

export default About;
