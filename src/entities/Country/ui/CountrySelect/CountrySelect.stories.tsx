import type { Meta, StoryObj } from '@storybook/react'
import { CountrySelect } from './CountrySelect'

const meta: Meta<typeof CountrySelect> = {
    title: 'entities/CountrySelect',
    component: CountrySelect,
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