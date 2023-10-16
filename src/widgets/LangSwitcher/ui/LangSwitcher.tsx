/* eslint-disable react/display-name */
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './LangSwitcher.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { memo, type FC } from 'react'

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher: FC<LangSwitcherProps> = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation()

    const toggle: VoidFunction = () => {
        void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            className={classNames(cls['lang-switcher'], {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={ toggle }
        >
            {(short ?? false) ? t('Язык коротко') : t('Язык')}
        </Button>
    )
})
