import type { Meta, StoryObj } from '@storybook/react'
import { ArticleRecommendationsList } from './ArticleRecommendationsList'
import type { Article } from 'entities/Article'
import { StoreDecorator } from 'shared/config/storybook'

console.log(_API_);

const article: Article = {
    id: '1',
    img: '',
    createdAt: '',
    views: 123,
    user: {id: '1', username: '123'},
    blocks: [],
    type: [],
    title: '123',
    subtitle: 'sdgdfg'
}

const meta: Meta<typeof ArticleRecommendationsList> = {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
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
                url: `${_API_}articles?_limit=4`,
                method: 'GET',
                status: 200,
                response: [
                    {...article, id: '1'},
                    {...article, id: '2'},
                    {...article, id: '3'},
                    {...article, id: '4'}
                ],
            },
        ],
    },
    decorators: [StoreDecorator({})]
}