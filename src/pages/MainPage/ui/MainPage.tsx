/* eslint-disable i18next/no-literal-string */
import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { RatingCard } from '@/entities/Rating';

const MainPage: FC = () => {
    const { t } = useTranslation('main');
    // const [ value, setValue] = useState('');

    // const onChange = (val: string): void => {
    //     setValue(val);
    // }

    return (
        <Page>
            {t('Главная страница')}
            <StarRating size={50} />
            <RatingCard 
                title={'Как вам статья?'} 
                feedbackTitle={'Оставьте отзыв о статье'}
                hasFeedback
            />
        </Page>
    )
}

export default MainPage
