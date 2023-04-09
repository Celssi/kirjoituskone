import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TextArea } from "../Components";

export default {
  title: "Components/TextArea",
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = () => (
  <div
    style={{
      width: "600px",
      backgroundColor: "#282c34",
      padding: "20px",
      display: "flex",
    }}
  >
    <TextArea />
  </div>
);

export const Primary = Template.bind({});
