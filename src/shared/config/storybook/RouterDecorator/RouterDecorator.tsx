import { type StoryFn } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const RouterDecorator = (story: () => StoryFn) => <BrowserRouter>{story()}</BrowserRouter>