import type { Meta, StoryObj } from '@storybook/react'
import { ProfileCard } from './ProfileCard'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
// eslint-disable-next-line ulbi-plugin/layer-imports
import '@/app/styles/index.scss';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import AvatarImg from '@/shared/assets/tests/storybook.webp'

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    tags: ['autodocs'],
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        data: {
            username: 'admin',
            age: 22,
            country: Country.Ukraine,
            lastname: 'ulbi tv',
            first: 'asd',
            city: 'asf',
            currency: Currency.USD,
            avatar: AvatarImg,
        }
    },
}

export const WithError: Story = {
    args: {
        error: 'error',
    }
}

export const Loading: Story = {
    args: {
        isLoading: true,
    }
}