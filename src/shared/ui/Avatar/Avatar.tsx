import { useMemo, type FC, type CSSProperties } from 'react'
import { type Mods, classNames } from '@/shared/lib/classNames/classNames'
import cls from './Avatar.module.scss'

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar: FC<AvatarProps> = (props: AvatarProps) => {
    const {
        className, 
        src = 'https://abrakadabra.fun/uploads/posts/2022-03/1646346868_4-abrakadabra-fun-p-standartnaya-avatarka-standoff-13.png', 
        size = 100,
        alt
    } = props;
    const mods: Mods = {}

    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size])

    return (
        <img 
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.avatar, mods, [className])} 
        />
    );
};