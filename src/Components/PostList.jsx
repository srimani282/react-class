import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";

function PostList(props) {
  const items = [
    {
      id: 1,
      name: "sri Mani",
      description: "decelewodjliehciwevcugwh",
    },
    {
      id: 2,
      name: "sri Mani",
      description: "decelewodjliehciwevcugwh",
    },
    {
      id: 3,
      name: "sri Mani",
      description: "decelewodjliehciwevcugwh",
    },
  ];

  return (
    <div className="container">
      <h2>PostList</h2>
      {items.map((item2) => (
        <Item item={item2} />
      ))}
    </div>
  );
}

PostList.propTypes = {};

export default PostList;
