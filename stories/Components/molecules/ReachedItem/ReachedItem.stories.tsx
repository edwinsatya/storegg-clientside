import { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react";
import ReachedItem, {
  ReachedItemProps,
} from "../../../../components/molecules/ReachedItem";

export default {
  title: "Components/Molecules/ReachedItem",
  component: ReachedItem,
} as Meta;

const Template: Story<ComponentProps<typeof ReachedItem>> = (
  args: ReachedItemProps
) => <ReachedItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "290M+",
  desc: "Players Top Up",
};
