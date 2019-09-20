import React from "react";
import PropTypes from "prop-types";

const TodoItem = props => {
  let description = props.item.description;
  if (description.length > 20) {
    description = description.substring(0, 20).concat("...[click to show]");
  }

  return (
    <div>
      <div onClick={() => props.onDescriptionClick(props.item)}>
        <p>{props.item.title}</p>
        <p>{description}</p>
      </div>
      <button onClick={() => props.onRemoveClick(props.item.title)}>
        remove
      </button>
      <button onClick={() => {props.onEditClick(props.item)}}>edit</button>
      <label >
        <input onChange={() => props.onCheckboxClick(props.item)} type="checkbox" checked={props.item.isDone} />
        is done
      </label>
    </div>
  );
};

TodoItem.propTypes = {

  item: PropTypes.shape({
    title: PropTypes.string
  }),
  onDescriptionClick: PropTypes.func.isRequired
};

export default TodoItem;
