import { Meta, StoryObj } from "@storybook/react/*"
import { Button as ButtonComp } from "."

const meta = {
    title: 'Button',
    component: ButtonComp,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    args: {
    },
    tags: ['autodocs']

} satisfies Meta<typeof ButtonComp>

export default meta

type Story = StoryObj<typeof meta>

export const Button: Story = {
    args: {
        onClick: () => { },
        label: "BUTTON",
        // className: "",
        // borderRadius: 20,
        type: 'default',
        // textAlign: "center",
    },
}