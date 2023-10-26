import type { Meta, StoryObj } from '@storybook/react';
import { StarRating } from './StarRating';
// eslint-disable-next-line ulbi-plugin/layer-imports
import '@/app/styles/index.scss';
const meta: Meta<typeof StarRating> = {
    title: 'shared/StarRating',
    component: StarRating,
    tags: ['autodocs'],
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};
