import React, { useState, useEffect, Component } from "react";
import PropTypes from "prop-types";

function Counter(props) {
  const [counter, setcounter] = useState(0);

  const handlecounter = (data) => {
    setcounter(counter + 2);
  };

  useEffect(() => {
    setcounter(counter + 1);
  }, []);

  const std = "10th";
  return (
    <div className="container">
      <h1>{counter}</h1>
      {console.log("first")}
      <button onClick={handlecounter}> Counter</button>

      {counter > 6 ? (
        <>
          <h2>2 nd condition Heading when true</h2>
          <p>first para</p>
          <h3>is a boy studing {std}</h3>
        </>
      ) : (
        <p>Counter is still less than 6</p>
      )}
    </div>
  );
}

Counter.propTypes = {};

export default Counter;
