import React from "react";
import TodoItem from "./TodoItem";

const TodoList = props => {
  let todos = <p>List is empty</p>;

  if (props.todos) {
    todos = props.todos.map(todoItem => {
      return (
        <TodoItem
          key={todoItem.title}
          title={todoItem.title}
          description={todoItem.description}
          onDescriptionClick={() => props.onItemDescriptionClick(todoItem)}
          onRemoveClick={() => props.onRemoveButtonClick(todoItem.title)}
        />
      );
    });
  }

  return <div>{todos}</div>;
};

export default TodoList;
