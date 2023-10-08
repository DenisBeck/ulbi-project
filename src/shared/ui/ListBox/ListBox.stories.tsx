import type { Meta, StoryObj } from '@storybook/react'
import { ListBox } from './ListBox'

const meta: Meta<typeof ListBox> = {
    title: 'shared/ListBox',
    component: ListBox,
    tags: ['autodocs'],
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
    decorators: [
        Story => <div style={{ 
            width: '100wh', 
            height: '100vh', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center'
        }}><Story /></div>
    ]
}

export default meta
type Story = StoryObj<typeof meta>

export const BottomLeft: Story = {
    args: {
        direction: 'bottom left',
        selectedValue: '123',
        items: [
            {content: 'sdkfsdj dskfsjdkf', value: '123'},
            {content: 'ryhfdgf fg hyuyu', value: '321'},
        ]
    },
}

export const BottomRight: Story = {
    args: {
        direction: 'bottom right',
        selectedValue: '123',
        items: [
            {content: 'sdkfsdj dskfsjdkf', value: '123'},
            {content: 'ryhfdgf fg hyuyu', value: '321'},
        ]
    },
}

export const TopLeft: Story = {
    args: {
        direction: 'top left',
        selectedValue: '123',
        items: [
            {content: 'sdkfsdj dskfsjdkf', value: '123'},
            {content: 'ryhfdgf fg hyuyu', value: '321'},
        ]
    },
}

export const TopRight: Story = {
    args: {
        direction: 'top right',
        selectedValue: '123',
        items: [
            {content: 'sdkfsdj dskfsjdkf', value: '123'},
            {content: 'ryhfdgf fg hyuyu', value: '321'},
        ]
    },
}