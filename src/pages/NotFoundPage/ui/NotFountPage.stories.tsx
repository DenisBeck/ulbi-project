import type { Meta, StoryObj } from '@storybook/react'
import { NotFoundPage } from './NotFoundPage'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook'

const meta: Meta<typeof NotFoundPage> = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
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
}

export const Dark: Story = {
    args: {
        
    },
    decorators: [ThemeDecorator(Theme.DARK)]
}