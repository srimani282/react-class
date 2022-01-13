import React, { useState, useEffect, Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./Components/HomePage";

// function App() {
//   const [counter, setcounter] = useState(0);

//   const handlecounter = () => {
//     setcounter(counter + 2);
//   };

//   useEffect(() => {
//     //setcounter(counter + 1);
//   }, [counter]);

//   const std = "10th";

//   return (
//     <div className="container">
//       <h1>{counter}</h1>
//       {console.log("first")}
//       <button onClick={handlecounter}> Counter</button>

//       {counter > 6 ? (
//         <>
//           <h2>2 nd condition Heading when true</h2>
//           <p>first para</p>
//           <h3>is a boy studing {std}</h3>
//         </>
//       ) : (
//         <p>Counter is still less than 6</p>
//       )}
//     </div>
//   );
// }

// export default App;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "Jordan Belfort",
    };
  }

  getData() {
    setTimeout(() => {
      console.log("Our data is fetched");
      this.setState({
        data: "Hello ReactFolks",
      });
    }, 1000);
  }
  //lifecycle methods
  componentWillMount() {
    console.log("First this called");
  }

  componentDidMount() {
    console.log("Component  Did Mount");
    this.getData();
  }

  render() {
    return (
      <div className="container">
        <h1>{this.state.data}</h1>
        {console.log("first")}
      </div>
    );
  }
}

export default App;
