import { Counter } from 'entities/Counter'
import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

const MainPage: FC = () => {
    const { t } = useTranslation('main')
    return (
        <div>
            <Counter />
            {t('Главная страница')}
        </div>
    )
}

export default MainPage
