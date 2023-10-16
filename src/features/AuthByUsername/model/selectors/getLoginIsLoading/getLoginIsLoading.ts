import type { StateSchema } from '@/app/providers/StoreProvider'

// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
export const getLoginIsLoading = (state: StateSchema): boolean => state?.loginForm?.isLoading || false;