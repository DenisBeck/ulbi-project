import type { Meta, StoryObj } from '@storybook/react'
import { ArticlesPageFilters } from './ArticlesPageFilters'
// eslint-disable-next-line ulbi-plugin/layer-imports
import '@/app/styles/index.scss';
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