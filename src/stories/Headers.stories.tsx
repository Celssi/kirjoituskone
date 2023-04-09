import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FormGroup, Header, Input, Label, SubHeader } from "../Components";

export default {
  title: "Components/Headers",
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => (
  <div
    style={{
      width: "600px",
      backgroundColor: "#282c34",
      padding: "20px",
      display: "flex",
    }}
  >
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Header>Header</Header>
        <SubHeader>Subheader</SubHeader>
      </div>
    </>
  </div>
);

export const Primary = Template.bind({});
