import React from "react";
import { Form, Segment, Button, Label, Divider } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import TextInput from "../../../app/common/form/TextInput";
import { connect } from "react-redux";
import { login, socialLoging } from "../authActions";
import SocialLogin from "../SocialLogin/SocialLogin";

const LoginForm = ({ login, handleSubmit, error, socialLoging }) => {
  return (
    <Form size="large" onSubmit={handleSubmit(login)}>
      <Segment>
        <Field
          name="email"
          component={TextInput}
          type="text"
          placeholder="Email Address"
        />
        <Field
          name="password"
          component={TextInput}
          type="password"
          placeholder="password"
        />
        {error && (
          <Label basic color="red">
            {error}
          </Label>
        )}
        <Button fluid size="large" color="teal" fluid>
          Login
        </Button>
        <Divider horizontal>Or</Divider>
        <SocialLogin socialLoging={socialLoging} />
      </Segment>
    </Form>
  );
};

const mapDispatchToProps = {
  login,
  socialLoging
};

export default connect(
  null,
  mapDispatchToProps
)(reduxForm({ form: "loginForm" })(LoginForm));
