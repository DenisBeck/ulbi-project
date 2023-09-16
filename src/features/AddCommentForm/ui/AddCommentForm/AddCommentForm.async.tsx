import { type FC, lazy } from 'react'
import type { AddCommentFormProps } from './AddCommentForm'

// export const AboutPageAsync = lazy(() => import('./AboutPage'));
export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(async () => await new Promise(resolve => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    setTimeout(() => { resolve(import('./AddCommentForm')) }, 1500)
}))