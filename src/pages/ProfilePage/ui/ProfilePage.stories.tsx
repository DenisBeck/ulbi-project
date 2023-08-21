import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook'
import ProfilePage from './ProfilePage'

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    tags: ['autodocs'],
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
}

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
    args: {
        
    },
    decorators: [StoreDecorator({})]
}

export const Dark: Story = {
    args: {
        
    },
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})]
}