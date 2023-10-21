import type { Meta, StoryObj } from '@storybook/react'
import { NotificationList } from './NotificationList'
import { StoreDecorator } from '@/shared/config/storybook'

const meta: Meta<typeof NotificationList> = {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
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
    parameters: {
        mockData: [
            {
                url: `${_API_}/notifications`,
                method: 'GET',
                status: 200,
                response: [
                    {
                        id: '1',
                        title: 'Уведомление',
                        description: 'Поставь лайк и оставь комментарий под Ulbi TV',
                    },
                    {
                        id: '2',
                        title: 'Уведомление 2',
                        description: 'Поставь лайк и оставь комментарий под Ulbi TV',
                    },
                    {
                        id: '3',
                        title: 'Уведомление 3',
                        description: 'Поставь лайк и оставь комментарий под Ulbi TV',
                    },
                ],
            },
        ],
    },
    decorators: [StoreDecorator({})]
}