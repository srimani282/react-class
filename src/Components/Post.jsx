import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router";

const { id } = useParams();

function Post(props) {
  return <div>{id}</div>;
}

Post.propTypes = {};

export default Post;
