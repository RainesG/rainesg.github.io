import { Meta, StoryObj } from "@storybook/react/*";
import { Menu } from ".";

const meta = {
  title: "BaseComponents",
  component: Menu,
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;
export const MenuComp: Story = {
  args: {
    menuList: [
        {
          menuText: "Action | Crime",
          subMenu: [{ menuText: "节日甄礼", pagination: { imgSrc: "" } }],
        },
        { menuText: "Comedy" },
        { menuText: "Drama | Romance" },
        { menuText: "Drama | War" },
        {
          menuText: "Comedy | Drama | Romance",
        },
        { menuText: "Comedy | Horror" },
        { menuText: "Drama" },
      ],
  },
};
