import { lazy } from 'react';

export const ArticleEditPageAsync = lazy(
    async () => await import('./ArticleEditPage'),
);
// export const ArticleEditPageAsync = lazy(async () => await new Promise(resolve => {
//     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//     // @ts-expect-error
//     setTimeout(() => { resolve(import('./ArticleEditPage')) }, 400)
// }))
