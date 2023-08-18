import { type FC, lazy } from 'react'
import type { LoginFormProps } from './LoginForm'

// export const AboutPageAsync = lazy(() => import('./AboutPage'));
export const LoginFormAsync = lazy<FC<LoginFormProps>>(async () => await new Promise(resolve => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    setTimeout(() => { resolve(import('./LoginForm')) }, 1500)
}))