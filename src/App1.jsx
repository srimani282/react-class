import React, { useState } from "react";
import PropTypes from "prop-types";

function App1(props) {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
  });

  const handleChange = (e) => {
    // if (e.target.value.length > 30) {
    //   setFormData({ ...formData, [e.target.name]: "" });
    // } else {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //make api call here http/www.react.com/form/ , post, {formData}
    console.log(formData);
  };

  return (
    <div className="container mt-5 pb-5 shadow">
      <div className="form-container">
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              name="email"
              className="form-control"
              placeholder="Enter email"
              onChange={handleChange}
              value={formData.email}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              name="name"
              className="form-control"
              placeholder="Enter email"
              onChange={handleChange}
              value={formData.name}
            />
          </div>

          <button onClick={handleSubmit} className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

App1.propTypes = {};

export default App1;
