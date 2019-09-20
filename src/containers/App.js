import React, { Component } from "react";
import AddTodoItem from "./AddTodoItem";
import About from "../components/About";
import TodoList from "../components/TodoList";
import DisplayArea from "../components/DisplayArea";
import AddItem from "./AddItem";

/*
 notes: 
    Keys and 'removeTodo' function are based on todo "title". Assume it is unique. 
*/

const style = {
  width: 400 + "px",
  margin: "0 auto"
};

class App extends Component {
  state = {
    display: null,
    toEdit: null,
    todos: [
      {
        title: "go and learn redux",
        isDone: false,
        description: "rewrite this app"
      },
      {
        title: "go and learn java",
        isDone: false,
        description:
          "make super REST API app with Spring and React Redux front end"
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
    if (this.state.display && this.state.display.title === title) {
      this.setItemToDisplay(null);
    }
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

  onCheckboxClick = todo => {
    this.setState({
      todos: this.toggleItemStatus(todo)
    });
  };

  toggleItemStatus = todo => {
    let updatedTodos = [...this.state.todos];
    updatedTodos
      .filter(item => {
        return item.title === todo.title;
      })
      .map(item => {
        return (item.isDone = !todo.isDone);
      });
    return updatedTodos;
  };

  onEditButtonClick = todo => {
    this.setItemToEdit(todo);
  };

  setItemToEdit = todo => {
    this.setState({
      toEdit: todo
    });
  };

  onUpdateButtonClick = (oldItem, newItem) => {
    this.setState({
      todos: this.updateItem(oldItem, newItem),
      toEdit: null
    });
  };

  updateItem = (oldItem, newItem) => {
    let updatedTodos = [...this.state.todos];
    updatedTodos
      .filter(item => {
        return item.title === oldItem.title;
      })
      .map(item => {
        item.title = newItem.title;
        item.description = newItem.description;
      });
    return updatedTodos;
  };

  render() {
    return (
      <div style={style}>
        <About />
        <TodoList
          todos={this.state.todos}
          onItemDescriptionClick={this.onItemDescriptionClick}
          onRemoveButtonClick={this.onRemoveButtonClick}
          onEditButtonClick={this.onEditButtonClick}
          onCheckboxClick={this.onCheckboxClick}
        />
        <hr />
        <DisplayArea todo={this.state.display} />
        <hr />
        <p>new add</p>
        <AddItem
          onAddButtonClick={this.onAddButtonClick}
          onUpdateButtonClick={this.onUpdateButtonClick}
          toEdit={this.state.toEdit}
        />
        <hr />
        <p>old add</p>
        <AddTodoItem
          onAddButtonClick={this.onAddButtonClick}
          onUpdateButtonClick={this.onUpdateButtonClick}
          toEdit={this.state.toEdit}
        />
      </div>
    );
  }
}

export default App;
