import { type FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input';
import { Page } from 'shared/ui/Page/Page';

const MainPage: FC = () => {
    const { t } = useTranslation('main');
    const [ value, setValue] = useState('');

    const onChange = (val: string): void => {
        setValue(val);
    }

    return (
        <Page>
            {/* <Counter /> */}

            {t('Главная страница')}
            <Input 
                onChange={ onChange } 
                value={ value } 
                placeholder='Введите текст'
            />
        </Page>
    )
}

export default MainPage
