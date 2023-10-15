/* eslint-disable react/display-name */
import { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Icon.module.scss'

interface IconProps {
    className?: string;
    Svg: React.FC<React.SVGProps<SVGSVGElement>>;
    inverted?: boolean;
}

export const Icon: FC<IconProps> = memo(({className, Svg, inverted}: IconProps) => {
    return (
        <Svg className={classNames(cls.icon, {[cls.inverted]: inverted}, [className])} />
    );
});