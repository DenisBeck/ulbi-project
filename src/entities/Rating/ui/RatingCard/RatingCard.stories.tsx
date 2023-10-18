import type { Meta, StoryObj } from '@storybook/react'
import { RatingCard } from './RatingCard'

const meta: Meta<typeof RatingCard> = {
    title: 'entities/RatingCard',
    component: RatingCard,
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
