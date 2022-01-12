import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./Components/HomePage";

const con1 = "jhabcj";

function App() {
  const std = "10th";

  return (
    <div className="container">
      <HomePage name={"Samara"} />

      <HomePage name={"Naresh"} />

      <h2>Heading</h2>
      <p>first para</p>

      <h3>is a boy studing {std}</h3>

      {con1 ? (
        <>
          <h2>Heading when true</h2>
          <p>first para</p>
          <h3>is a boy studing {std}</h3>
        </>
      ) : (
        <>
          <h2>Not True</h2>
          <p>Failed</p>
          <h3>is a boy studing fdailed</h3>
        </>
      )}

      {con1 ? (
        <>
          <h2>2 nd condition Heading when true</h2>
          <p>first para</p>
          <h3>is a boy studing {std}</h3>
        </>
      ) : null}
    </div>
  );
}

export default App;
