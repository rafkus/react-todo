import React from "react";
import PropTypes from "prop-types";

const TodoItem = props => {
  let description = props.description;
  if (description.length > 10) {
    description = description.substring(0, 12).concat("...");
  }

  return (
    <div>
      <div onClick={props.onDescriptionClick}>
        <p>{props.title}</p>
        <p>{description}</p>
      </div>
      <button onClick={props.onRemoveClick}>remove</button>
      <button>edit</button>
    </div>
  );
};

TodoItem.propTypes = {
  title: PropTypes.string.isRequired
};

export default TodoItem;
