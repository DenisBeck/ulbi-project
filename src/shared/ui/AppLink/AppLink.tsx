import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props: AppLinkProps) => {
    const { 
        className, 
        to, 
        children, 
        theme = AppLinkTheme.PRIMARY,
        ...otherProps 
    } = props;
    return (
        <Link to={to} className={classNames(cls.appLink, {theme}, [className, cls[theme]])} {...otherProps}>
            {children}
        </Link>
    );
};