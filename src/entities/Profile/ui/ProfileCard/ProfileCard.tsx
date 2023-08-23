import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard: FC<ProfileCardProps> = ({className}: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    
    const data = useSelector(getProfileData);
    
    return (
        <div className={classNames(cls['profile-card'], {}, [className])}>
            <div className={ cls.header }>
                <Text title={t('Профиль')} />
                <Button className={cls['edit-btn']} theme={ ButtonTheme.OUTLINE }>
                    {t('Редактировать')}
                </Button>
            </div>
            <div className={ cls.data }>
                <Input 
                    value={ data?.first }
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                />
                <Input 
                    value={ data?.lastname }
                    placeholder={t('Ваша фамилия')}
                    className={cls.input}
                />
            </div>
        </div>
    );
};