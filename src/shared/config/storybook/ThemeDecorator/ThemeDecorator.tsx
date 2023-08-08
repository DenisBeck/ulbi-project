import { type StoryFn } from '@storybook/react';
import { type Theme } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (StoryComponent:  StoryFn) => (
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
)