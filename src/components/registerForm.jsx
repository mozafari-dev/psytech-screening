import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import * as userService from "../services/userService";
import auth from "../services/authService";

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .email()
      .label("Username"),
    password: Joi.string()
      .required()
      .min(5)
      .label("Password"),
    name: Joi.string()
      .required()
      .label("Name")
  };

  doSubmit = async () => {
    try {
      const response = await userService.register(this.state.data);
      auth.loginWithJwt(response.headers["x-auth-token"]);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div>
        <h1>ثبت نام در سامانه</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "شناسه کاربری", "ایمیل")}
          {this.renderInput("password", "گذرواژه", "نام و نام خانوادگی", "password")}
          {this.renderInput("name", "نام و نام خانوادگی", "نام و نام خانوادگی")}
          {this.renderButton("ثبت نام")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
