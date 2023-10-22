import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'
import { Text, TextTag, TitleTag } from '../Text/Text'
// eslint-disable-next-line ulbi-plugin/layer-imports
import '@/app/styles/index.scss';
const meta: Meta<typeof Card> = {
    title: 'shared/Card',
    component: Card,
    tags: ['autodocs'],
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
}

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
    args: {
        children: <Text title={{content: 'title', tag: TitleTag.H1}} text={[{content: 'test text', tag: TextTag.P}]} />
    },
}