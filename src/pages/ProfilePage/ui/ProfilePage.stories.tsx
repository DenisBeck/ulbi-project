import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/app/providers/ThemeProvider'
import { StoreDecorator, ThemeDecorator } from '@/shared/config/storybook'
import ProfilePage from './ProfilePage'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import AvatarImg from '@/shared/assets/tests/storybook.webp'

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
    decorators: [StoreDecorator({
        profile: {
            form: {
                username: 'admin',
                age: 22,
                country: Country.Ukraine,
                lastname: 'ulbi tv',
                first: 'asd',
                city: 'asf',
                currency: Currency.USD,
                avatar: AvatarImg,
            }
        }
    })]
}

export const Dark: Story = {
    args: {
        
    },
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
        profile: {
            form: {
                username: 'admin',
                age: 22,
                country: Country.Ukraine,
                lastname: 'ulbi tv',
                first: 'asd',
                city: 'asf',
                currency: Currency.USD,
                avatar: AvatarImg,
            }
        }
    })]
}