/* eslint-disable @typescript-eslint/explicit-function-return-type */
import type { StoryFn } from "@storybook/react";
import { Suspense } from 'react';

export const SuspenseDecorator = (StoryComponent: StoryFn) => <Suspense><StoryComponent /></Suspense>