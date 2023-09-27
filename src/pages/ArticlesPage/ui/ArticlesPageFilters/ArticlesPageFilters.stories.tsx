import type { Meta, StoryObj } from '@storybook/react'
import { ArticlesPageFilters } from './ArticlesPageFilters'

const meta: Meta<typeof ArticlesPageFilters> = {
    title: 'pages/ArticlesPageFilters',
    component: ArticlesPageFilters,
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