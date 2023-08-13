import { type FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input';

const MainPage: FC = () => {
    const { t } = useTranslation('main');
    const [ value, setValue] = useState('');

    const onChange = (val: string): void => {
        setValue(val);
    }

    return (
        <div>
            {/* <Counter /> */}

            {t('Главная страница')}
            <Input 
                onChange={ onChange } 
                value={ value } 
                placeholder='Введите текст'
            />
        </div>
    )
}

export default MainPage
