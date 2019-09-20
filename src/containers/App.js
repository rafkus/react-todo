import React, { Component } from "react";
import AddTodoItem from "../components/AddTodoItem";
import TodoList from "../components/TodoList";
import DisplayArea from "../components/DisplayArea";

/*
 notes: 
    Keys and 'removeTodo' function are based on todo "title". Assume it is unique. 
*/

class App extends Component {
  state = {
    display: null,
    todos: [
      {
        title: "todo 1",
        isDone: false,
        description: "short desc"
      },
      {
        title: "todo 2",
        isDone: false,
        description: "very long long desc"
      }
    ]
  };

  onItemDescriptionClick = todo => {
    this.setItemToDisplay(todo);
  };

  setItemToDisplay = todo => {
    this.setState({
      display: todo
    });
  };

  onAddButtonClick = todo => {
    this.setState({
      todos: this.addTodoItem(todo)
    });
  };

  addTodoItem = todo => {
    let updatedTodos = [...this.state.todos];
    updatedTodos.push(todo);
    return updatedTodos;
  };

  onRemoveButtonClick = title => {
    this.setState({
      todos: this.removeTodo(title)
    });
  };

  removeTodo = title => {
    let updatedTodos = [...this.state.todos];
    return updatedTodos.filter(todo => {
      return todo.title !== title;
    });
  };

  render() {
    return (
      <div>
        <TodoList
          todos={this.state.todos}
          onItemDescriptionClick={this.onItemDescriptionClick}
          onRemoveButtonClick={this.onRemoveButtonClick}
        />
        <DisplayArea todo={this.state.display} />
        <AddTodoItem add={this.onAddButtonClick} />
      </div>
    );
  }
}

export default App;
