import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';
import { ThemeDecorator } from '@/shared/config/storybook';
import { Theme } from '@/shared/const/theme';
// eslint-disable-next-line ulbi-plugin/layer-imports
import '@/app/styles/index.scss';
const meta: Meta<typeof Skeleton> = {
    title: 'shared/Skeleton',
    component: Skeleton,
    tags: ['autodocs'],
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        width: '100%',
        height: 200,
    },
};

export const Circle: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100,
    },
};

export const NormalDark: Story = {
    args: {
        width: '100%',
        height: 200,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const CircleDark: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const NormalOrange: Story = {
    args: {
        width: '100%',
        height: 200,
    },
    decorators: [ThemeDecorator(Theme.ORANGE)],
};

export const CircleOrange: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100,
    },
    decorators: [ThemeDecorator(Theme.ORANGE)],
};
