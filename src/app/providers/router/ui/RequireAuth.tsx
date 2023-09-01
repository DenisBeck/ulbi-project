/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { getUserAuthData } from 'entities/User';
import type { PropsWithChildren, FC } from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

export interface RequireAuthProps extends PropsWithChildren {
    children: JSX.Element;
}

export const RequireAuth: FC<RequireAuthProps> = ({ children }: RequireAuthProps) => {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();

    console.log(auth);
    if(!auth) {
        return <Navigate to="/" state={{ from: location }} replace />
    }

    return children
};