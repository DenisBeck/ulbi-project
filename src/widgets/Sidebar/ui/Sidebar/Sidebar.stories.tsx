import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Sidebar> = {
    title: 'widget/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        
    },
};

export const Dark: Story = {
    args: {
        
    },
    decorators: [ ThemeDecorator(Theme.DARK) ],
};