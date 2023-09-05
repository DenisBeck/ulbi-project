import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextSize, TextTheme } from './Text'
import { ThemeDecorator } from 'shared/config/storybook'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
    tags: ['autodocs'],
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        title: 'Title lorem ipsum',
        text: ['Description Description Description Description']
    },
};

export const OnlyTitle: Story = {
    args: {
        title: 'Title lorem ipsum',
    },
};

export const OnlyText: Story = {
    args: {
        text: ['Description Description Description Description']
    },
};

export const PrimaryDark: Story = {
    args: {
        title: 'Title lorem ipsum',
        text: ['Description Description Description Description'],
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const OnlyTitleDark: Story = {
    args: {
        title: 'Title lorem ipsum',
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const OnlyTextDark: Story = {
    args: {
        text: ['Description Description Description Description']
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const Error: Story = {
    args: {
        title: 'Title lorem ipsum',
        text: ['Description Description Description Description'],
        theme: TextTheme.ERROR
    },
};

export const ErrorOnlyTitle: Story = {
    args: {
        title: 'Title lorem ipsum',
        theme: TextTheme.ERROR
    },
};

export const ErrorOnlyText: Story = {
    args: {
        text: ['Description Description Description Description'],
        theme: TextTheme.ERROR
    },
};

export const ErrorDark: Story = {
    args: {
        title: 'Title lorem ipsum',
        text: ['Description Description Description Description'],
        theme: TextTheme.ERROR
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const ErrorOnlyTitleDark: Story = {
    args: {
        title: 'Title lorem ipsum',
        theme: TextTheme.ERROR
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const ErrorOnlyTextDark: Story = {
    args: {
        text: ['Description Description Description Description'],
        theme: TextTheme.ERROR
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const SizeM: Story = {
    args: {
        title: 'Title lorem ipsum',
        text: ['Description Description Description Description'],
        size: TextSize.M
    },
};

export const SizeS: Story = {
    args: {
        title: 'Title lorem ipsum',
        text: ['Description Description Description Description'],
        size: TextSize.S
    },
};