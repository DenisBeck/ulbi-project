import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { ThemeDecorator } from '@/shared/config/storybook';
import { Theme } from '@/shared/const/theme';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Text',
    },
};

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR
    },
};

export const Outline: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE
    },
};

export const OutlineInverted: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE_INVERTED
    },
};

export const OutlineSizeM: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.M
    },
};

export const OutlineSizeL: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.L,
    },
};

export const OutlineDark: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const Background: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND
    },
};

export const BackgroundInverted: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND_INVERTED
    },
};

export const Square: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
    },
};

export const SquareSizeS: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.S
    },
};

export const SquareSizeM: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.M
    },
};

export const SquareSizeL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L
    },
};

export const Disabled: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.OUTLINE,
        disabled: true
    },
};