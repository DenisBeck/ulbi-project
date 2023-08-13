/* eslint-disable i18next/no-literal-string */
import { useState, type FC, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername'

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [ isAuthModal, setIsAuthModal ] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onOpenModal = useCallback(() => {
        setIsAuthModal(true);
    }, [])

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
                {/* <Modal isOpen={ isAuthModal } onClose={ onToggleModal } >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio autem error numquam culpa voluptatibus adipisci tempore provident? Incidunt, facilis voluptatem. Sapiente quas natus vel repudiandae earum animi cum delectus totam.</Modal> */}
                <LoginModal isOpen={ isAuthModal } onClose={ onCloseModal } />
            </div>
        </div>
    )
}
