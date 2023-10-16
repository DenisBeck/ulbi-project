/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { type UserRole, getUserRoles, getUserAuthData } from '@/entities/User';
import { type PropsWithChildren, type FC, useMemo } from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';

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
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }

    if (!hasRequiredRoles) {
        return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />;
    }

    return children
};