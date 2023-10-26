import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextSize, TextTag, TextTheme, TitleTag } from './Text';
import { ThemeDecorator } from '@/shared/config/storybook';
import { Theme } from '@/shared/const/theme';
// eslint-disable-next-line ulbi-plugin/layer-imports
import '@/app/styles/index.scss';
const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
    tags: ['autodocs'],
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: { content: 'Title lorem ipsum', tag: TitleTag.H1 },
        text: [
            {
                content: 'Description Description Description Description',
                tag: TextTag.P,
            },
        ],
    },
};

export const OnlyTitle: Story = {
    args: {
        title: { content: 'Title lorem ipsum', tag: TitleTag.H1 },
    },
};

export const OnlyText: Story = {
    args: {
        text: [
            {
                content: 'Description Description Description Description',
                tag: TextTag.P,
            },
        ],
    },
};

export const PrimaryDark: Story = {
    args: {
        title: { content: 'Title lorem ipsum', tag: TitleTag.H1 },
        text: [
            {
                content: 'Description Description Description Description',
                tag: TextTag.P,
            },
        ],
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTitleDark: Story = {
    args: {
        title: { content: 'Title lorem ipsum', tag: TitleTag.H1 },
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTextDark: Story = {
    args: {
        text: [
            {
                content: 'Description Description Description Description',
                tag: TextTag.P,
            },
        ],
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Error: Story = {
    args: {
        title: { content: 'Title lorem ipsum', tag: TitleTag.H1 },
        text: [
            {
                content: 'Description Description Description Description',
                tag: TextTag.P,
            },
        ],
        theme: TextTheme.ERROR,
    },
};

export const ErrorOnlyTitle: Story = {
    args: {
        title: { content: 'Title lorem ipsum', tag: TitleTag.H1 },
        theme: TextTheme.ERROR,
    },
};

export const ErrorOnlyText: Story = {
    args: {
        text: [
            {
                content: 'Description Description Description Description',
                tag: TextTag.P,
            },
        ],
        theme: TextTheme.ERROR,
    },
};

export const ErrorDark: Story = {
    args: {
        title: { content: 'Title lorem ipsum', tag: TitleTag.H1 },
        text: [
            {
                content: 'Description Description Description Description',
                tag: TextTag.P,
            },
        ],
        theme: TextTheme.ERROR,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const ErrorOnlyTitleDark: Story = {
    args: {
        title: { content: 'Title lorem ipsum', tag: TitleTag.H1 },
        theme: TextTheme.ERROR,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const ErrorOnlyTextDark: Story = {
    args: {
        text: [
            {
                content: 'Description Description Description Description',
                tag: TextTag.P,
            },
        ],
        theme: TextTheme.ERROR,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const SizeM: Story = {
    args: {
        title: { content: 'Title lorem ipsum', tag: TitleTag.H1 },
        text: [
            {
                content: 'Description Description Description Description',
                tag: TextTag.P,
            },
        ],
        size: TextSize.M,
    },
};

export const SizeS: Story = {
    args: {
        title: { content: 'Title lorem ipsum', tag: TitleTag.H1 },
        text: [
            {
                content: 'Description Description Description Description',
                tag: TextTag.P,
            },
        ],
        size: TextSize.S,
    },
};
