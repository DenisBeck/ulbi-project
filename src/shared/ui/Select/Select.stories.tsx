import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './Select'

const meta: Meta<typeof Select> = {
    title: 'shared/Select',
    component: Select,
    tags: ['autodocs'],
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        label: 'Укажите значение',
        options: [
            {
                value: '123',
                content: 'Первый пункт'
            },
            {
                value: '1234',
                content: 'Второй пункт'
            }
            

        ]
    },
}