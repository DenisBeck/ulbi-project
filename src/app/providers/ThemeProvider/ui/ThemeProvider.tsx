import { useState, useMemo, type FC, type PropsWithChildren } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext'

// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
const defaultTheme: Theme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

interface ThemeProviderProps extends PropsWithChildren {
    initialTheme?: Theme;
}

const ThemeProvider: FC<ThemeProviderProps> = (props: ThemeProviderProps) => {
    const { initialTheme, children} = props;

    const [theme, setTheme] = useState<Theme>(defaultTheme ?? initialTheme )

    const defaultProps = useMemo(() => ({
        theme,
        setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
