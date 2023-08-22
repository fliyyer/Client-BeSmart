import React from "react";
import { Form } from "react-bootstrap";
import TextInput from "../TextInput";

function TextInputWithLabel({
  label,
  name,
  value, // state
  type,
  onChange,
  placeholder,
  className
}) {
  return (
    <Form.Group className="mb-2">
      <Form.Label>{label}</Form.Label>
      <TextInput
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={className}
      />
    </Form.Group>
  );
}

export default TextInputWithLabel;
