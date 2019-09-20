import React from "react";

const Input = props => {
  let inputElement = null;
  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    default:
      inputElement = <input {...props.elementConfig} value={props.value} />;
  }

  let errors = null;
  if (props.invalid && props.touched) {
    errors = props.errors.map((errorMessage, index) => {
      return <p key={index}>{errorMessage}</p>;
    });
  }
  return (
    <div>
      {errors}
      <label>
        {props.label}
        {inputElement}
      </label>
    </div>
  );
};

export default Input;
