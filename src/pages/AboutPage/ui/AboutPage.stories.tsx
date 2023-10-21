import type { Meta, StoryObj } from '@storybook/react'
import AboutPage from './AboutPage'
import { ThemeDecorator } from '@/shared/config/storybook'
import { Theme } from '@/shared/const/theme'

const meta: Meta<typeof AboutPage> = {
    title: 'pages/AboutPage',
    component: AboutPage,
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