import React from "react";
import TextInputWithLabel from "../TextInputWithLabel";
import { Form } from "react-bootstrap";
import SButton from "../Button";

export default function LoginInput({ form, handleChange, handleSubmit, isLoading }) {
  return (
    <Form>
      <div className="pt-30">
        <TextInputWithLabel
          placeholder={"Masukan email"}
          label={"Email"}
          name="email"
          value={""}
          type="email"
          onChange={""}
          className="text-lg form-control rounded-5"
        />
      </div>

      <div className="pt-30">
        <TextInputWithLabel
          placeholder={"Masukan password"}
          label={"Password"}
          name="password"
          value={""}
          type="password"
          onChange={""}
          className="text-lg form-control rounded-5"
        />
      </div>

      <div className="button-group d-flex flex-column mx-auto pt-50">
        <SButton
          loading={isLoading}
          disabled={isLoading}
          variant="primary"
          className="btn btn-sign-in fw-medium text-lg bg-danger text-white rounded-5 "
          action={handleSubmit}
        >
          Continue to Sign In
        </SButton>
      </div>
    </Form>
  );
}
