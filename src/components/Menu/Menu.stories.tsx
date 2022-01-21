import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

import Menu from "./Menu";

type Story = ComponentStory<typeof Menu>;
type Meta = ComponentMeta<typeof Menu>;

const meta: Meta = {
  title: "Todo/Menu",
  component: Menu,
  argTypes: {
    value: { control: "text" },
  },
  args: {},
};
export default meta;

const withCtx = (comp: JSX.Element) => (
  <BrowserRouter basename={import.meta.env.BASE_URL}>{comp}</BrowserRouter>
);

export const Default: Story = (args) => withCtx(<Menu {...args} />);

export const Secondary: Story = (args) => withCtx(<Menu {...args} />);
Secondary.args = { value: "Menu" };
