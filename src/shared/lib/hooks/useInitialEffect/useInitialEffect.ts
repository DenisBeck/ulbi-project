import { useEffect } from "react";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function useInitialEffect(callback: () => void) {
    useEffect(() => {
        if(_PROJECT_ !== 'storybook') {
            callback();
        }
        // eslint-disable-next-line
    }, [])
}