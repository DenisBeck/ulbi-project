/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { type StoryFn } from '@storybook/react';
import '@/app/styles/index.scss';
import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n/i18nForTests';

// eslint-disable-next-line react/display-name, @typescript-eslint/explicit-function-return-type
export const TranslationDecorator = (StoryComponent:  StoryFn) => (
    <I18nextProvider i18n={ i18n }>
        <Suspense fallback="">
            <StoryComponent />
        </Suspense>
    </I18nextProvider>
)