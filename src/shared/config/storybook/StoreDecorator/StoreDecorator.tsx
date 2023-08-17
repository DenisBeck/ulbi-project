/* eslint-disable @typescript-eslint/restrict-template-expressions */
import type { DeepPartial } from '@reduxjs/toolkit';
import type { StoryFn } from '@storybook/react';
import { StoreProvider, type StateSchema } from 'app/providers/StoreProvider';
import 'app/styles/index.scss';

// eslint-disable-next-line react/display-name
export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent:  StoryFn) => (
    <StoreProvider initialState={ state }>
        <StoryComponent />
    </StoreProvider>
)