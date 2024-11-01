import { Meta, StoryObj } from "@storybook/react/*";
import { ImageList } from ".";

const meta = {
    title: 'Image list',
    component: ImageList,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: { imageList: [] },
} satisfies Meta<typeof ImageList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ImageListComp: Story = {
    args: {
        imageList: [
            {
                "width": 736,
                "height": 1472,
                "filename": "_.jpeg",
                "storename": "ylWwE1Ub5rLCnIG.jpg",
                "size": 107355,
                "path": "/2024/09/26/ylWwE1Ub5rLCnIG.jpg",
                "hash": "TsHnSYciWdDEJvr4f9P5bUFaBG",
                "created_at": "2024-09-26 15:14:25",
                "url": "https://s2.loli.net/2024/09/26/ylWwE1Ub5rLCnIG.jpg",
                "delete": "https://sm.ms/delete/TsHnSYciWdDEJvr4f9P5bUFaBG",
                "page": "https://sm.ms/image/ylWwE1Ub5rLCnIG"
            },
            {
                "width": 736,
                "height": 1472,
                "filename": "_ _2_.jpeg",
                "storename": "56Z2M4SF3pntxvG.jpg",
                "size": 166608,
                "path": "/2024/09/26/56Z2M4SF3pntxvG.jpg",
                "hash": "FbDxXLP64trhjJ1TQI5umkS9Me",
                "created_at": "2024-09-26 15:14:34",
                "url": "https://s2.loli.net/2024/09/26/56Z2M4SF3pntxvG.jpg",
                "delete": "https://sm.ms/delete/FbDxXLP64trhjJ1TQI5umkS9Me",
                "page": "https://sm.ms/image/56Z2M4SF3pntxvG"
            },
            {
                "width": 736,
                "height": 736,
                "filename": "_ (1).jpeg",
                "storename": "Npq7IXoTrOhaUic.jpg",
                "size": 122511,
                "path": "/2024/09/29/Npq7IXoTrOhaUic.jpg",
                "hash": "EX9NxndvsR8e2H5ZmqiKUSBfDu",
                "created_at": "2024-09-29 13:45:52",
                "url": "https://s2.loli.net/2024/09/29/Npq7IXoTrOhaUic.jpg",
                "delete": "https://sm.ms/delete/EX9NxndvsR8e2H5ZmqiKUSBfDu",
                "page": "https://sm.ms/image/Npq7IXoTrOhaUic"
            },
            {
                "width": 500,
                "height": 500,
                "filename": "logo.png",
                "storename": "mzJCAjK1nVFxd7p.png",
                "size": 110762,
                "path": "/2024/09/29/mzJCAjK1nVFxd7p.png",
                "hash": "WrTsbVPY6LuafNlEgAQeGtX1BD",
                "created_at": "2024-09-29 15:37:50",
                "url": "https://s2.loli.net/2024/09/29/mzJCAjK1nVFxd7p.png",
                "delete": "https://sm.ms/delete/WrTsbVPY6LuafNlEgAQeGtX1BD",
                "page": "https://sm.ms/image/mzJCAjK1nVFxd7p"
            },
            {
                "width": 736,
                "height": 736,
                "filename": "_ (1).jpeg",
                "storename": "Gv9IskoJigAUe5H.jpg",
                "size": 122511,
                "path": "/2024/09/29/Gv9IskoJigAUe5H.jpg",
                "hash": "4PLcIiUq5RDVE9o26rndaGbYMN",
                "created_at": "2024-09-29 15:41:17",
                "url": "https://s2.loli.net/2024/09/29/Gv9IskoJigAUe5H.jpg",
                "delete": "https://sm.ms/delete/4PLcIiUq5RDVE9o26rndaGbYMN",
                "page": "https://sm.ms/image/Gv9IskoJigAUe5H"
            }
        ]
    },
};