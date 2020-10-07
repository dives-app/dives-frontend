import React from "react";
import { Button } from "./Button";

export default {
  title: "Core/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  appearance: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  appearance: "secondary",
};

export const SecondaryOutlined = Template.bind({});
SecondaryOutlined.args = {
  appearance: "secondaryOutlined",
};
