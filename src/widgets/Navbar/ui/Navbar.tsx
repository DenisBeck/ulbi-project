/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable i18next/no-literal-string */
import { useState, type FC, useCallback, useEffect, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from 'entities/User'
import { Text, TextAlign, TextTheme, TitleTag } from 'shared/ui/Text/Text'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Dropdown } from 'shared/ui/Dropdown/Dropdown'

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [ isAuthModal, setIsAuthModal ] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onOpenModal = useCallback(() => {
        setIsAuthModal(true);
    }, [])

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    useEffect(() => {
        if(authData) {
            onCloseModal();
        }
    })

    const isAdminPanelAvailable = isAdmin || isManager;

    if(authData) {
        return (
            <header className={classNames(cls.navbar, {}, [className])}>
                <Text 
                    className={cls.appname} 
                    title={{content: 'Ulbi tv app', tag: TitleTag.H2}}
                    theme={TextTheme.INVERTED}
                    align={TextAlign.CENTER} 
                />
                <div className={cls.links}>
                    <AppLink theme={ AppLinkTheme.SECONDARY } to={ RoutePath.article_create} className={cls['create-btn']} >{t('Создать статью')}</AppLink>
                    <AppLink theme={ AppLinkTheme.SECONDARY } to={ RoutePath.main} className={cls['main-link']} >{t('Главная')}</AppLink>
                    <AppLink theme={ AppLinkTheme.SECONDARY } to={ RoutePath.about} >{t('О сайте')}</AppLink>
                </div>
                <div className={cls.auth}>
                    <Dropdown 
                        className={cls.dropdown}
                        direction={'bottom left'}
                        items={[
                            ...(isAdminPanelAvailable ? [{
                                content: t('Админ панель'),
                                href: RoutePath.admin_panel,
                            }] : []),
                            {
                                content: t('Профиль'),
                                href: RoutePath.profile + authData.id,
                            },
                            {
                                content: t('Выйти'),
                                onClick: onLogout
                            }
                        ]}
                        trigger={<Avatar size={30} src={authData.avatar} />}
                    />
                    <LoginModal isOpen={ isAuthModal } onClose={ onCloseModal } />
                </div>
            </header>
        )
    }

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={ AppLinkTheme.SECONDARY } to={ RoutePath.main} className={cls['main-link']} >{t('Главная')}</AppLink>
                <AppLink theme={ AppLinkTheme.SECONDARY } to={ RoutePath.about} >{t('О сайте')}</AppLink>
            </div>
            <div className={cls.auth}>
                <Button 
                    theme={ ButtonTheme.OUTLINE_INVERTED }
                    className={ cls.login }
                    onClick={ onOpenModal }>
                    {t('Войти')}
                </Button>
                {isAuthModal && <LoginModal isOpen={ isAuthModal } onClose={ onCloseModal } />}
            </div>
        </div>
    )
})
