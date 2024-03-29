import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../Components";

export default {
  title: "Components/Button",
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <div style={{ width: "100px" }}>
    <Button>{args.label}</Button>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
};
