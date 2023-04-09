import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FormGroup, Input, Label } from "../Components";

export default {
  title: "Components/FormGroup",
} as ComponentMeta<typeof FormGroup>;

const Template: ComponentStory<typeof FormGroup> = () => (
  <div
    style={{
      width: "600px",
      backgroundColor: "#282c34",
      padding: "20px",
      display: "flex",
    }}
  >
    <FormGroup>
      <Label>Example</Label>
      <Input type="number" defaultValue={250} />
    </FormGroup>
  </div>
);

export const Primary = Template.bind({});
