import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

import Header from "./Header";

type Story = ComponentStory<typeof Header>;
type Meta = ComponentMeta<typeof Header>;

const meta: Meta = {
  title: "Todo/Header",
  component: Header,
  argTypes: {
    value: { control: "text" },
  },
  args: {},
};
export default meta;

const withCtx = (comp: JSX.Element) => (
  <BrowserRouter basename={import.meta.env.BASE_URL}>{comp}</BrowserRouter>
);

export const Default: Story = (args) => withCtx(<Header {...args} />);

export const Secondary: Story = (args) => withCtx(<Header {...args} />);
Secondary.args = { value: "Header" };
