import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions';
import AddCommentForm from './AddCommentForm'
import { StoreDecorator } from 'shared/config/storybook';

const meta: Meta<typeof AddCommentForm> = {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
    tags: ['autodocs'],
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
}

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
    args: {
        onSendComment: action('onSendComment'),
    },
    decorators: [StoreDecorator({})]
}