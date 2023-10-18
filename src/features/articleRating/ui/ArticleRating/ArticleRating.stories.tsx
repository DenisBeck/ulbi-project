import type { Meta, StoryObj } from '@storybook/react'
import ArticleRating from './ArticleRating'

const meta: Meta<typeof ArticleRating> = {
    title: 'features/ArticleRating',
    component: ArticleRating,
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
