import React from "react";

function HomePage(props) {
  const std = "nafresh";
  return (
    <div>
      <h2>HomePage</h2>
      <p>Home Para</p>
      <h3>{props.name}</h3>
    </div>
  );
}

export default HomePage;
