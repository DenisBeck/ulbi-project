import type { Meta, StoryObj } from '@storybook/react'
import ArticleDetailsPage from './ArticleDetailsPage'

const meta: Meta<typeof ArticleDetailsPage> = {
    title: 'pages/ArticleDetailsPage',
    component: ArticleDetailsPage,
    tags: ['autodocs'],
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        
    },
}