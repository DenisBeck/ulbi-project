/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { type FC, Suspense, useEffect } from 'react'
import { useTheme } from './providers/ThemeProvider/lib/useTheme'
import { classNames } from '../shared/lib/classNames/classNames'
import { AppRouter } from './providers/router'
import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInit, userActions } from '@/entities/User'

const App: FC = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const init = useSelector(getUserInit);

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {init && <AppRouter />}
                </div>
            </Suspense>
        </div>
    )
}

export default App
