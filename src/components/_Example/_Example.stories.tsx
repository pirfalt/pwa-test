import { ComponentStory, ComponentMeta } from "@storybook/react";

import _Example from "./_Example";

type Story = ComponentStory<typeof _Example>;
type Meta = ComponentMeta<typeof _Example>;

const meta: Meta = {
  title: "Todo/_Example",
  component: _Example,
  argTypes: {
    value: { control: "text" },
  },
  args: {},
};
export default meta;

export const Default: Story = (args) => <_Example {...args} />;

export const Secondary: Story = (args) => <_Example {...args} />;
Secondary.args = { value: "_Example" };
