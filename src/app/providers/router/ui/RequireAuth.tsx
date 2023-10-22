/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { type UserRole, getUserRoles, getUserAuthData } from '@/entities/User';
import { getRouteForbidden, getRouteMain } from '@/shared/const/router';
import { type PropsWithChildren, type FC, useMemo } from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

export interface RequireAuthProps extends PropsWithChildren {
    children: JSX.Element;
    roles?: UserRole[];
}

export const RequireAuth: FC<RequireAuthProps> = ({ children, roles }: RequireAuthProps) => {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();
    const userRoles = useSelector(getUserRoles);

    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true;
        }

        return roles.some((requiredRole) => {
            const hasRole = userRoles?.includes(requiredRole);
            return hasRole;
        });
    }, [roles, userRoles]);

    if (!auth) {
        return <Navigate to={getRouteMain()} state={{ from: location }} replace />;
    }

    if (!hasRequiredRoles) {
        return <Navigate to={getRouteForbidden()} state={{ from: location }} replace />;
    }

    return children
};