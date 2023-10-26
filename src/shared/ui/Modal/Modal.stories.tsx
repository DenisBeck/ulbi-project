import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { ThemeDecorator } from '@/shared/config/storybook';
import { Theme } from '@/shared/const/theme';
// eslint-disable-next-line ulbi-plugin/layer-imports
import '@/app/styles/index.scss';
const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    tags: ['autodocs'],
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        isOpen: true,
        children:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum fuga iusto voluptas cumque illum eligendi culpa hic, voluptatem eveniet eum excepturi accusantium tempora! Totam, dicta doloribus? Neque unde magni atque.',
    },
};

export const Dark: Story = {
    args: {
        isOpen: true,
        children:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum fuga iusto voluptas cumque illum eligendi culpa hic, voluptatem eveniet eum excepturi accusantium tempora! Totam, dicta doloribus? Neque unde magni atque.',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
