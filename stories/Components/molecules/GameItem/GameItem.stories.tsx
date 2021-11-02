import { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react";
import GameItem, {
  GameItemProps,
} from "../../../../components/molecules/GameItem";

export default {
  title: "Components/Molecules/GameItem",
  component: GameItem,
} as Meta;

const Template: Story<ComponentProps<typeof GameItem>> = (
  args: GameItemProps
) => <GameItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  thumbnail: "/img/Thumbnail-1.png",
  title: "Super Mechs",
  category: "Mobile",
};
