import { ComponentStory, ComponentMeta } from "@storybook/react";

import Camera from "./Camera";

type Story = ComponentStory<typeof Camera>;
type Meta = ComponentMeta<typeof Camera>;

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args

const meta: Meta = {
  title: "Todo/Camera",
  component: Camera,
  argTypes: {},
  args: {},
};
export default meta;

export const Default: Story = (args) => <Camera />;
