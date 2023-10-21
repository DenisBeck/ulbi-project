/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { type FC, Suspense, memo, useCallback, type ReactElement } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from '../config/routeConfig'
import { PageLoader } from '@/widgets/PageLoader'
import { RequireAuth } from './RequireAuth'
import type{ AppRoutesProps } from '@/shared/types/router'

const AppRouter: FC = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        // const element = (
        //     <div className="page-wrapper">{route.element}</div>
        // )

        return (
            <Route 
                key={route.path} 
                path={route.path} 
                element={
                    route.authOnly ? (<RequireAuth roles={route.roles}>{route.element as ReactElement}</RequireAuth>) : route.element
                } 
            />
        )
    }, [])
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(routeConfig).map(renderWithWrapper)}
            </Routes>
        </Suspense>
    )
}

export default memo(AppRouter)
