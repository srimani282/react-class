import React, { useState } from "react";
import PropTypes from "prop-types";

function PostForm(props) {
  const [postData, setPostData] = useState({
    title: "",
    description: "",
    username: "",
    rating: "",
  });

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(postData);
  };

  return (
    <div className="container mt-5 pb-5 shadow">
      <div className="form-container">
        <p>This is a POST FORM</p>
        <form>
          <div className="form-group">
            <label for="title">Title</label>
            <input
              name="title"
              className="form-control"
              placeholder="Enter title"
              onChange={handleChange}
              value={postData.title}
            />
          </div>

          <div className="form-group">
            <label for="description">Description</label>
            <input
              name="description"
              className="form-control"
              placeholder="Enter description"
              onChange={handleChange}
              value={postData.description}
            />
          </div>

          <div className="form-group">
            <label for="username">username</label>
            <input
              name="username"
              className="form-control"
              placeholder="Enter username"
              onChange={handleChange}
              value={postData.username}
            />
          </div>

          <div className="form-group">
            <label for="rating">rating</label>
            <input
              name="rating"
              className="form-control"
              placeholder="Enter rating between 0 to 5"
              onChange={handleChange}
              value={postData.rating}
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

PostForm.propTypes = {};

export default PostForm;
