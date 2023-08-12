import { type ReactNode, type FC } from 'react'
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
    element?: HTMLElement;
}

export const Portal: FC<PortalProps> = (props: PortalProps) => {
    const { children, element = document.body } = props;

    return createPortal(children, element);
};