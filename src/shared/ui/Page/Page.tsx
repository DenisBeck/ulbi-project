/* eslint-disable react/display-name */
import { memo, type FC, type ReactNode, useRef, type MutableRefObject } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Page.module.scss'
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';

interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page: FC<PageProps> = memo(({className, children, onScrollEnd}: PageProps) => {
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    })

    return (
        <main ref={wrapperRef} className={classNames(cls.page, {}, [className])}>
            {children}
            <div ref={triggerRef} />
        </main>
    );
});