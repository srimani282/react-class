import React from "react";
import PropTypes from "prop-types";

function Item(props) {
  return (
    <div className="Container">
      <h3>{props.item.id}</h3>
      <p>{props.item.name}</p>
      <p>{props.item.description}</p>
    </div>
  );
}

Item.propTypes = {};

export default Item;
