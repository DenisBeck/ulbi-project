/* eslint-disable react/display-name */
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { memo, type FC } from 'react';
import { Icon } from '@/shared/ui/Icon';
import { Theme } from '@/shared/const/theme';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(
    ({ className }: ThemeSwitcherProps) => {
        const { theme, toggleTheme } = useTheme();
        return (
            <Button
                theme={ButtonTheme.CLEAR}
                onClick={toggleTheme}
                className={classNames(cls['theme-switcher'], {}, [className])}
            >
                {theme === Theme.LIGHT ? (
                    <Icon Svg={LightIcon} />
                ) : (
                    <Icon Svg={DarkIcon} />
                )}
            </Button>
        );
    },
);
