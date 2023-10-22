import { useMemo, type FC, type CSSProperties } from 'react'
import { type Mods, classNames } from '@/shared/lib/classNames/classNames'
import cls from './Avatar.module.scss'
import { AppImage } from '../AppImage';
import UserIcon from '../../assets/icons/user-filled.svg';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
    fallbackInverted?: boolean;
}

export const Avatar: FC<AvatarProps> = (props: AvatarProps) => {
    const {
        className, 
        src, 
        size = 100,
        alt,
        fallbackInverted
    } = props;
    const mods: Mods = {}

    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size])

    const errorFallback = <Icon inverted={fallbackInverted} width={size} height={size} Svg={UserIcon} />
    const fallback = <Skeleton width={size} height={size} border='50%' />

    return (
        <AppImage 
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.avatar, mods, [className])} 
            fallback={fallback}
            errorFallback={errorFallback}
        />
    );
};