import React, { Component } from "react";
import { pipelineTopicExpression } from "@babel/types";

class AddTodoItem extends Component {
  state = {
    form: {
      title: "",
      description: ""
    },
    editing: null,
    isValid: false,
    errors: null,
    touched: false
  };

  componentDidUpdate() {
    if (this.props.toEdit) {
      if (this.state.editing !== this.props.toEdit) {
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
    const name = ev.target.name;
    if(name === 'title') {
      this.setState({
        touched: true
      })
    }
    updatedForm[name] = ev.target.value;
    

    this.setState({
      form: updatedForm
    });
  };

  onAddClick = ev => {
    ev.preventDefault();
    
    if(!this.isValid()) {
      return;
    }

    const newTodo = this.createTodo();
    this.props.onAddButtonClick(newTodo);
    this.resetForm();
  };

  isValid = () => {
    let isValid = true;

    console.log(this.state.isValid);
    

    if(this.state.form.title.length < 3) {
      isValid = false && isValid; 
    }

    this.setState({
      isValid: isValid
    })

    return isValid;
  }

  createTodo() {
    return {
      title: this.state.form.title,
      description: this.state.form.description,
      isDone: false
    };
  }

  resetForm = () => {
    this.setState({
      form: {
        title: "",
        description: ""
      },
      editing: null,
      touched: false
    });
  };

  onUpdateClick = ev => {
    ev.preventDefault();

    if (this.props.toEdit) {
      if(!this.isValid()) {
        return;
      }
 
      const newItem = this.createTodo();
      const oldItem = this.props.toEdit;
      this.props.onUpdateButtonClick(oldItem, newItem);
      this.resetForm();
    }
  };

  render() {

    let errors = null;
    if(!this.state.isValid && this.state.touched) {
      errors = <p>Legnth should be > 3</p>
    }


    return (
      <div>
        <form action="">
          <label>
            title
            <input
              type="text"
              name="title"
              onChange={this.onInputChange}
              value={this.state.form.title}
            />
          </label>
          {errors}
          <br />
          <label>description
            <textarea
              name="description"
              onChange={this.onInputChange}
              cols="30"
              rows="10"
              value={this.state.form.description}
            />
          </label>
          <br />
          <button onClick={this.onAddClick}>Add</button>
          <button onClick={this.onUpdateClick}>Update</button>
        </form>
      </div>
    );
  }
}

export default AddTodoItem;
