import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';
import '@/app/styles/index.scss';
import { StoreDecorator, ThemeDecorator } from '@/shared/config/storybook';
import { Theme } from '@/app/providers/ThemeProvider';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Navbar> = {
    title: 'widget/Navbar',
    component: Navbar,
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
    decorators: [ StoreDecorator({}) ]
};

export const Dark: Story = {
    args: {
        
    },
    decorators: [ ThemeDecorator(Theme.DARK), StoreDecorator({}) ],
};

export const Auth: Story = {
    args: {
        
    },
    decorators: [ StoreDecorator({
        user: {authData: {}}
    }) ],
};