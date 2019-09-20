import React, { Component } from "react";

class AddTodoItem extends Component {
  state = {
    input: ""
  };

  onInputChange = ev => {
    this.setState({
      input: ev.target.value
    });
  };

  onAddClick = () => {
    console.log(this.state.input);
    this.props.add({ title: this.state.input, description: "" });
    this.setState({
        input: ""
    })
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.onInputChange}
          value={this.state.input}
        />
        <br />
        <textarea name="description" cols="30" rows="10"></textarea>
        <br />
        <button onClick={this.onAddClick}>Add</button>
        <button>Update</button>
      </div>
    );
  }
}

export default AddTodoItem;
