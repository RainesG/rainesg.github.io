import { Meta, StoryObj } from "@storybook/react/*";
import TabComponent from ".";
const meta = {
  title: "BaseComponents",
  component: TabComponent,
} satisfies Meta<typeof TabComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TabComp: Story = {
  args: {
    tabs: [
      {
        title: "tab1",
        onClick: () => {
          console.log("click~");
        },
        children: "test",
      },
      { title: "tab2" },
      { title: "tab3", children: "ahora" },
    ],
  },
};
