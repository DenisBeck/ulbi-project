import type { Meta, StoryObj } from '@storybook/react'
import { ArticleDetailsComments } from './ArticleDetailsComments'

const meta: Meta<typeof ArticleDetailsComments> = {
    title: 'pages/Article/ArticleDetailsComments',
    component: ArticleDetailsComments,
    tags: ['autodocs'],
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
}

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {
        
    },
}