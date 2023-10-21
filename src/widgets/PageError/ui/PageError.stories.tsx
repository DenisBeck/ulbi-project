import type { Meta, StoryObj } from '@storybook/react';
import { PageError } from './PageError';
import { ThemeDecorator } from '@/shared/config/storybook';
import { Theme } from '@/shared/const/theme';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof PageError> = {
    title: 'widget/PageError',
    component: PageError,
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