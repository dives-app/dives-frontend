import React from "react";
import { GreenLink } from "./GreenLink";

export default {
  title: "Core/GreenLink",
  component: GreenLink,
};

const Template = (args) => <GreenLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Sample",
  href: "",
};
