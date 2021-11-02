import { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react";
import StepItem, {
  StepItemProps,
} from "../../../../components/molecules/StepItem";

export default {
  title: "Components/Molecules/StepItem",
  component: StepItem,
} as Meta;

const Template: Story<ComponentProps<typeof StepItem>> = (
  args: StepItemProps
) => <StepItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  dataStep: {
    icon: "/icon/step1.svg",
    title: "1. Start",
    desc1: "Pilih salah satu game",
    desc2: "yang ingin kamu top up",
  },
};
