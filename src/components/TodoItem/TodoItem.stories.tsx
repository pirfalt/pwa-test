import { ComponentStory, ComponentMeta } from "@storybook/react";

import TodoItem from "./TodoItem";

type Story = ComponentStory<typeof TodoItem>;
type Meta = ComponentMeta<typeof TodoItem>;

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args

const meta: Meta = {
  title: "Todo/TodoItem",
  component: TodoItem,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    todoId: "1",
  },
};
export default meta;

export const Default: Story = (args) => <TodoItem {...args} />;

export const WithId: Story = (args) => <TodoItem {...args} />;
WithId.args = { todoId: "2" };
