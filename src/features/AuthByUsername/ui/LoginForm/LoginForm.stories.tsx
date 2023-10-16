import type { Meta, StoryObj } from '@storybook/react'
import LoginForm from './LoginForm'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

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
    decorators: [StoreDecorator({
        loginForm: { username: 'admin', password: '123' }
    })]
};

export const WithError: Story = {
    args: {
        
    },
    decorators: [StoreDecorator({
        loginForm: { username: 'admin', password: '123', error: 'ERROR' }
    })]
}

export const Loading: Story = {
    args: {
        
    },
    decorators: [StoreDecorator({
        loginForm: { username: 'admin', password: '123', isLoading: true }
    })]
}