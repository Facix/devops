import type { Meta, StoryFn } from "@storybook/react";

import Button from "./Button";

export default {
  component: Button
} as Meta;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "Bonjour",
  bg: "cyan"
};
