import React from "react";
import { Checkbox } from "./Checkbox";

export default {
  title: "Core/Checkbox",
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {};
