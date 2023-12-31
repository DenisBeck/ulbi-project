/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable i18next/no-literal-string */
import { useState, type FC, useCallback, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { LoginModal } from '@/features/AuthByUsername';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { Text, TextAlign, TextTheme, TitleTag } from '@/shared/ui/Text';
import { HStack } from '@/shared/ui/Stack';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import {
    getRouteAbout,
    getRouteArticleCreate,
    getRouteMain,
} from '@/shared/const/router';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onOpenModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    if (authData) {
        return (
            <header className={classNames(cls.navbar, {}, [className])}>
                <Text
                    className={cls.appname}
                    title={{ content: 'Ulbi tv app', tag: TitleTag.H2 }}
                    theme={TextTheme.INVERTED}
                    align={TextAlign.CENTER}
                />
                <div className={cls.links}>
                    <AppLink
                        theme={AppLinkTheme.SECONDARY}
                        to={getRouteArticleCreate()}
                        className={cls['create-btn']}
                    >
                        {t('Создать статью')}
                    </AppLink>
                    <AppLink
                        theme={AppLinkTheme.SECONDARY}
                        to={getRouteMain()}
                        className={cls['main-link']}
                    >
                        {t('Главная')}
                    </AppLink>
                    <AppLink
                        theme={AppLinkTheme.SECONDARY}
                        to={getRouteAbout()}
                    >
                        {t('О сайте')}
                    </AppLink>
                </div>
                <HStack gap="16" className={cls.actions}>
                    <NotificationButton />
                    <AvatarDropdown className={cls.dropdown} />
                </HStack>
                <div className={cls.auth}>
                    <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
                </div>
            </header>
        );
    }

    return (
        <header className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={getRouteMain()}
                    className={cls['main-link']}
                >
                    {t('Главная')}
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={getRouteAbout()}>
                    {t('О сайте')}
                </AppLink>
            </div>
            <div className={cls.auth}>
                <Button
                    theme={ButtonTheme.OUTLINE_INVERTED}
                    className={cls.login}
                    onClick={onOpenModal}
                >
                    {t('Войти')}
                </Button>
                {isAuthModal && (
                    <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
                )}
            </div>
        </header>
    );
});
