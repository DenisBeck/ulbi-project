import {
    RouterDecorator,
    StyleDecorator,
    SuspenseDecorator,
    ThemeDecorator,
} from '../../src/shared/config/storybook';
import { Theme } from '../../src/shared/const/theme';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    layout: 'fullscreen',
    themes: {
        default: 'dark',
        list: [
            { name: 'light', class: Theme.LIGHT, color: '#e8e8ea' },
            { name: 'dark', class: Theme.DARK, color: '#0e0e75' },
            { name: 'orange', class: Theme.ORANGE, color: '#bd5012' },
        ],
    },
};

export default {
    decorators: [
        StyleDecorator,
        ThemeDecorator(Theme.LIGHT),
        RouterDecorator,
        SuspenseDecorator,
        // TranslationDecorator,
        // StoreDecorator
    ],
};
