import React from "react";
import Input from "./Input";

export default {
  title: "Core/Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Text = Template.bind({});
Text.args = {
  id: "text",
  label: "Username",
};

export const Password = Template.bind({});
Password.args = {
  id: "password",
  label: "Password",
  type: "password",
};
