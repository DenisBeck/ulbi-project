import type { Meta, StoryObj } from '@storybook/react';
import { Code } from './Code';
// eslint-disable-next-line ulbi-plugin/layer-imports
import '@/app/styles/index.scss';
const meta: Meta<typeof Code> = {
    title: 'shared/Code',
    component: Code,
    tags: ['autodocs'],
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        text:
            'const meta: Meta<typeof Code> = {\n' +
            "\ttitle: 'shared/Code',\n" +
            '\tcomponent: Code,\n' +
            "\ttags: ['autodocs'],\n" +
            '\targTypes: {\n' +
            "\t\tbackgroundColor: { control: 'color' },\n" +
            '\t},\n' +
            '}\n',
    },
};
