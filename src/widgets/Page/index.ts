export { Page } from './ui/Page'

export type { ScrollPageSchema } from './model/types/scrollPageSchema'
export { getScrollPositionByPath } from './model/selectors/scrollPage'
export { scrollPageReducer, scrollPageActions } from './model/slice/scrollPageSlice'