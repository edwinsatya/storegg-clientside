import { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react";
import FooterItem, {
  FooterItemProps,
} from "../../../../components/molecules/FooterItem";

export default {
  title: "Components/Molecules/FooterItem",
  component: FooterItem,
} as Meta;

const Template: Story<ComponentProps<typeof FooterItem>> = (
  args: FooterItemProps
) => <FooterItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  titleMenu: "Company",
  listMenu: ["About Us", "Press Release", "Terms of Us", "Privacy & Policy"],
};
