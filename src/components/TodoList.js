import React from "react";
import TodoItem from "./TodoItem";

const TodoList = props => {
  let todos = <p>List is empty</p>;

  if (props.todos) {
    todos = props.todos.map(todoItem => {
      return (
        <TodoItem
          key={todoItem.title}
          item={todoItem}
          onDescriptionClick={props.onItemDescriptionClick}
          onRemoveClick={props.onRemoveButtonClick}
          onCheckboxClick={props.onCheckboxClick}
          onEditClick={props.onEditButtonClick}
        />
      );
    });
  }

  return <div>{todos}</div>;
};

export default TodoList;
