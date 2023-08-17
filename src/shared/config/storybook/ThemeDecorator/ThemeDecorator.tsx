/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { type StoryFn } from '@storybook/react';
import { ThemeProvider, type Theme } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (StoryComponent:  StoryFn) => (
    <ThemeProvider initialTheme={ theme }>
        <div className={`app ${ theme }`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
)