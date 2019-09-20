import React, { Component } from "react";
import { pipelineTopicExpression } from "@babel/types";

class AddTodoItem extends Component {
  state = {
    form: {
      title: "",
      description: ""
    },
    editing: null
  };

  componentDidUpdate() {
    if (this.props.toEdit) {
      if (this.state.editing != this.props.toEdit) {
        this.setState({
          form: {
            title: this.props.toEdit.title,
            description: this.props.toEdit.description
          },
          editing: this.props.toEdit
        });
      }
    }
  }

  onInputChange = ev => {
    let updatedForm = { ...this.state.form };
    updatedForm[ev.target.name] = ev.target.value;

    this.setState({
      form: updatedForm
    });
  };

  onAddClick = ev => {
    ev.preventDefault();
    const newTodo = this.createTodo();
    this.props.onAddButtonClick(newTodo);
    this.resetForm();
  };

  createTodo() {
    return {
      title: this.state.form.title,
      description: this.state.form.description
    };
  }

  resetForm = () => {
    this.setState({
      form: {
        title: "",
        description: ""
      },
      editing: null
    });
  };

  onUpdateClick = ev => {
    ev.preventDefault();
    this.resetForm();
    // todo why is not resetting form? because to edit is still set in App?
  };

  render() {
    return (
      <div>
        <form action="">
          <input
            type="text"
            name="title"
            onChange={this.onInputChange}
            value={this.state.form.title}
          />
          <br />
          <textarea
            name="description"
            onChange={this.onInputChange}
            cols="30"
            rows="10"
            value={this.state.form.description}
          ></textarea>
          <br />
          <button onClick={this.onAddClick}>Add</button>
          <button onClick={this.onUpdateClick}>Update</button>
        </form>
      </div>
    );
  }
}

export default AddTodoItem;
