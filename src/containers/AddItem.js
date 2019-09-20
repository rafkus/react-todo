import React, { Component } from "react";
import Input from "../components/UI/Input";

class AddItem extends Component {
  state = {
    addForm: {
      title: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Title"
        },
        validation: {
          required: true,
          minLength: 3,
          maxLength: 10
        },
        valid: false,
        touched: false,
        errors: [],
        value: ""
      },
      description: {
        elementType: "textarea",
        elementConfig: {
          type: "textarea",
          placeholder: "Description"
        },
        validation: {
          required: false
        },
        valid: true,
        touched: false,
        errors: [],
        value: ""
      }
    },
    editing: null
  };


  // todo disable submit buttons
  checkValidity = element => {
    let isValid = true;
    const rules = element.validation;
    const value = element.value;
    element.errors = [];

    if (rules.required) {
      //   isValid = value.trim() !== "";
      if (value.trim() === "") {
          element.errors.push("Field is required");
        return element.valid = false;
      }
      // could return if false
    }

    if (rules.minLength) {
      //   isValid = value.length >= rules.minLength && isValid;
      if (value.length < rules.minLength) {
        element.valid = false; 
        element.errors.push("Min length is " + rules.minLength);
      }
    }

    if (rules.maxLength) {
      //   isValid = value.length <= rules.maxLength && isValid;
      if (value.length > rules.maxLength) {
        element.valid = false ;
        element.errors.push("Max length is " + rules.maxLength);
      }
    }
    return element.valid;
  };

  inputChangedHandler = (ev, inputKey) => {
    const updatedForm = { ...this.state.addForm };
    const updatedFormElement = { ...updatedForm[inputKey] };
    updatedFormElement.value = ev.target.value;
    updatedFormElement.touched = true;
    // updatedFormElement.valid = this.checkValidity(
    //   updatedFormElement.value,
    //   updatedFormElement.validation
    // );

    this.checkValidity(updatedFormElement);
    console.log(updatedFormElement.errors);
    
    updatedForm[inputKey] = updatedFormElement;
    this.setState({
      addForm: updatedForm
    });

    // console.log(this.state);
    
  };

  componentDidUpdate() {
    if (this.props.toEdit) {
      if (this.state.editing !== this.props.toEdit) {
        const updatedForm = { ...this.state.addForm };
        const updatedFormTitle = { ...updatedForm["title"] };
        updatedFormTitle.value = this.props.toEdit.title;
        const updatedFormDescription = { ...updatedForm["description"] };
        updatedFormDescription.value = this.props.toEdit.description;

        updatedForm["title"] = updatedFormTitle;
        updatedForm["description"] = updatedFormDescription;

        this.setState({
          addForm: updatedForm,
          editing: this.props.toEdit
        });
      }
    }
  }

  onAddClick = ev => {
    ev.preventDefault();
    const newTodo = this.createTodo();
    this.props.onAddButtonClick(newTodo);
    this.resetForm();
  };

  onUpdateClick = ev => {
    ev.preventDefault();

    if (this.props.toEdit) {
      const newItem = this.createTodo();
      const oldItem = this.props.toEdit;
      this.props.onUpdateButtonClick(oldItem, newItem);
      this.resetForm();
    }
  };

  createTodo() {
    return {
      title: this.state.addForm.title.value,
      description: this.state.addForm.description.value,
      isDone: false
    };
  }

  resetForm = () => {
    this.setState({
      addForm: {
        title: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Title"
          },
          validation: {
            required: true,
            minLength: 3,
            maxLength: 32
          },
          valid: false,
          touched: false,
          errors: null,
          value: ""
        },
        description: {
          elementType: "textarea",
          elementConfig: {
            type: "textarea",
            placeholder: "Description"
          },
          validation: {
            required: false
          },
          valid: true,
          touched: false,
          errors: null,
          value: ""
        }
      },
      editing: null
    });
  };

  render() {
    const formElementsArray = [];
    for (const key in this.state.addForm) {
      formElementsArray.push({
        id: key,
        config: this.state.addForm[key]
      });
    }

    return (
      <div>
        <form action="">
          {formElementsArray.map(formElement => {
            return (
              <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                changed={event => {
                  this.inputChangedHandler(event, formElement.id);
                }}
                invalid={!formElement.config.valid}
                touched={formElement.config.touched}
                errors={formElement.config.errors}
              />
            );
          })}
          <button onClick={this.onAddClick}>Add</button>
          <button onClick={this.onUpdateClick}>Update</button>
        </form>
      </div>
    );
  }
}

export default AddItem;
