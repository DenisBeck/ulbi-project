/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/display-name */
import { memo, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleEditPage.module.scss'
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Page } from '@/widgets/Page';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage: FC<ArticleEditPageProps> = memo((props: ArticleEditPageProps) => {
    const {className} = props;
    const { t } = useTranslation('article');
    const { id } = useParams<{id: string}>();
    const isEdit = Boolean(id);
    
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <Page data-testid='ArticleEditPage' className={classNames(cls['article-edit-page'], {}, [className])}>
            {isEdit && (Boolean(id)) ? t('Редактирование статьи с ID ') + (id as string) : t('Создание новой статьи')}
        </Page>
    );
});

export default ArticleEditPage;