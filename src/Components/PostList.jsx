import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router";

function PostList(props) {
  const { id } = useParams();

  return (
    <div>
      <h2>{id}</h2>
    </div>
  );
}

PostList.propTypes = {};

export default PostList;
