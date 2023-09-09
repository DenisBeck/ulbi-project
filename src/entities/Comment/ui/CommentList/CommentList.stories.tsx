import type { Meta, StoryObj } from '@storybook/react'
import { CommentList } from './CommentList'

const meta: Meta<typeof CommentList> = {
    title: 'entities/CommentList',
    component: CommentList,
    tags: ['autodocs'],
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
}

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
    args: {
        
    },
}