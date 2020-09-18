import React from "react";
import { Button } from "./Button";

export default {
  title: "Core/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  label: "Button",
};
