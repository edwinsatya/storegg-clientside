import { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react";
import { Input } from "../../../../components/atoms";
import { InputProps } from "../../../../components/atoms/input";

export default {
  title: "Components/Atoms/Input",
  component: Input,
} as Meta;

const Template: Story<ComponentProps<typeof Input>> = (args: InputProps) => (
  <Input {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Nama Lengkap",
};
