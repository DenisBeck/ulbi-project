import type { Meta, StoryObj } from '@storybook/react'
import ArticleEditPage from './ArticleEditPage'

const meta: Meta<typeof ArticleEditPage> = {
    title: 'pages/Article/ArticleEditPage',
    component: ArticleEditPage,
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