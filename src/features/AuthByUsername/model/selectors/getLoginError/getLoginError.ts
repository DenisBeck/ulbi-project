/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import type { StateSchema } from 'app/providers/StoreProvider'

export const getLoginError = (state: StateSchema): string | undefined => state?.loginForm?.error;