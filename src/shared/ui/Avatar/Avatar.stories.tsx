import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import AvatarImg from '@/shared/assets/tests/storybook.webp';
// eslint-disable-next-line ulbi-plugin/layer-imports
import '@/app/styles/index.scss';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Avatar> = {
    title: 'shared/Avatar',
    component: Avatar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        size: 150,
        src: AvatarImg,
    },
};

export const Small: Story = {
    args: {
        size: 50,
        src: AvatarImg,
    },
};
