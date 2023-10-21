import type { Meta, StoryObj } from '@storybook/react'
import ArticleRating from './ArticleRating'
import { StoreDecorator } from '@/shared/config/storybook'

const meta: Meta<typeof ArticleRating> = {
    title: 'features/ArticleRating',
    component: ArticleRating,
    tags: ['autodocs'],
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
}

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
    args: {
        articleId: '1'
    },
    parameters: {
        mockData: [
            {
                url: `${_API_}/article-ratings?userId=1&articleId=1`,
                method: 'GET',
                status: 200,
                response: [
                    {
                        rate: 4,
                    },
                ],
            },
        ],
        
    },
    decorators: [StoreDecorator({
        user: {
            authData: { id: '1' }
        }
    })]
}

export const WithoutRate: Story = {
    args: {
        articleId: '1'
    },
    parameters: {
        mockData: [
            {
                url: `${_API_}/article-ratings?userId=1&articleId=1`,
                method: 'GET',
                status: 200,
                response: [],
            },
        ],
    },
    decorators: [StoreDecorator({
        user: {
            authData: { id: '1' }
        }
    })]
}
