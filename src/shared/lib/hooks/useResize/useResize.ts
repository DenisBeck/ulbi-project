import { useState, useEffect } from "react";

export const useResize = (resizingElement: Element): number => {
    const width = resizingElement.clientWidth;

    const [clientWidth, setClientWidth] = useState(width);

    const resizeHandler = (): void => {
        const width = document.documentElement.clientWidth;
        setClientWidth(width);
    };

    useEffect(() => {
        window.addEventListener("resize", resizeHandler);
        resizeHandler();

        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, []);

    return clientWidth;
}

