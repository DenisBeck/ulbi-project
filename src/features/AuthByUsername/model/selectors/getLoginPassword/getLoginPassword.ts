/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import type { StateSchema } from '@/app/providers/StoreProvider'

export const getLoginPassword = (state: StateSchema): string => state?.loginForm?.password || '';