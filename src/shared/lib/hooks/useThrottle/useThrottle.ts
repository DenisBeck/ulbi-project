import { useCallback, useRef } from "react";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function useThrottle(callback: (...args: any[]) => void, delay: number) {
    const throttleRef = useRef(false);

    return useCallback((...args: any[]) => {
        if(!throttleRef.current) {
            // eslint-disable-next-line n/no-callback-literal
            callback(...args);
            throttleRef.current = true;
            
            setTimeout(() => {
                throttleRef.current = false
            }, delay)
        }

    }, [callback, delay])
}