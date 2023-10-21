import { type StoryFn } from '@storybook/react';

export const StyleDecorator = (story: () => StoryFn): StoryFn => story();