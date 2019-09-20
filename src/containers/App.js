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
    toEdit: null,
    todos: [
      {
        title: "todo 1",
        isDone: false,
        description: "short desc"
      },
      {
        title: "todo 2",
        isDone: false,
        description: "very long long very long long very long long very long long very long long desc"
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
    if(this.state.display && this.state.display.title === title) {
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

  onCheckboxClick = (todo) => {
    this.setState({
      todos: this.toggleItemStatus(todo)
    })
  }

  toggleItemStatus = (todo) => {
    let updatedTodos = [...this.state.todos];
    updatedTodos.filter((item) => {
      return item.title === todo.title
    }).map((item) => {
      return item.isDone = !todo.isDone;
    })
    return updatedTodos;
  }
  

  onEditButtonClick = (todo) => {
    this.setItemToEdit(todo);
  };

  setItemToEdit = (todo) => {
    this.setState({
      toEdit: todo
    })
  }
  
  onUpdateButtonClick = () => {
    // todo - find todo by title and give it new body from form
  };

  render() {
    return (
      <div>
        <TodoList
          todos={this.state.todos}
          onItemDescriptionClick={this.onItemDescriptionClick}
          onRemoveButtonClick={this.onRemoveButtonClick}
          onEditButtonClick={this.onEditButtonClick}
          onCheckboxClick={this.onCheckboxClick}
        />
        <DisplayArea todo={this.state.display} />
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
