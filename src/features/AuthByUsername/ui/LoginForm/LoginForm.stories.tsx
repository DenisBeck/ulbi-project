import type { Meta, StoryObj } from '@storybook/react'
import { LoginForm } from './LoginForm'

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
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