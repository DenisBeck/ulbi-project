import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';
import { action } from '@storybook/addon-actions';
// eslint-disable-next-line ulbi-plugin/layer-imports
import '@/app/styles/index.scss';
const meta: Meta<typeof Tabs> = {
    title: 'shared/Tabs',
    component: Tabs,
    tags: ['autodocs'],
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        tabs: [
            {
                value: 'tab 1',
                content: 'content 1',
            },
            {
                value: 'tab 2',
                content: 'content 2',
            },
            {
                value: 'tab 3',
                content: 'content 3',
            },
        ],
        value: 'tab 2',
        onTabClick: action('onTabClick'),
    },
};
