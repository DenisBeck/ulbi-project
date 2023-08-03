import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LangSwitcher.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { type FC } from 'react'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation()

    const toggle: VoidFunction = () => {
        void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            className={classNames(cls['lang-switcher'], {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={ toggle }
        >
            {t('Язык')}
        </Button>
    )
}
