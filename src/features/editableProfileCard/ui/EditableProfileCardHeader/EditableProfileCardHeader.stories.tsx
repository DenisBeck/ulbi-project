import type { Meta, StoryObj } from '@storybook/react'
import { EditableProfileCardHeader } from './EditableProfileCardHeader'
import { StoreDecorator } from 'shared/config/storybook'

const meta: Meta<typeof EditableProfileCardHeader> = {
    title: 'features/EditableProfileCardHeader',
    component: EditableProfileCardHeader,
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
    decorators: [StoreDecorator({})]
}