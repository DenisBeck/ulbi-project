/* eslint-disable i18next/no-literal-string */
import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { HStack } from 'shared/ui/Stack';
import { Page } from 'widgets/Page';

const MainPage: FC = () => {
    const { t } = useTranslation('main');
    // const [ value, setValue] = useState('');

    // const onChange = (val: string): void => {
    //     setValue(val);
    // }

    return (
        <Page>
            {t('Главная страница')}
            <div>skdjkgjfdg</div>
            <HStack>
                <div>hgjdfgf</div>
                <ListBox 
                    defaultValue={t('Выберите значение')}
                    onChange={(value: string) => {}}
                    selectedValue={undefined}
                    items={[
                        {value: '1', content: '123'},
                        {value: '2', content: '12dsf3', disabled: true},
                        {value: '3', content: 'hhjgh'},
                    ]}
                />
            </HStack>
            <div>skdjkgjfdg</div>
            <div>skdjkgjfdg</div>
            <div>skdjkgjfdg</div>
            <div>skdjkgjfdg</div>
        </Page>
    )
}

export default MainPage
