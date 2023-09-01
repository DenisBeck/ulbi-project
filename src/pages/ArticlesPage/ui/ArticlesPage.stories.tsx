import type { Meta, StoryObj } from '@storybook/react'
import ArticlesPage from './ArticlesPage'

const meta: Meta<typeof ArticlesPage> = {
    title: 'pages/ArticlesPage',
    component: ArticlesPage,
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