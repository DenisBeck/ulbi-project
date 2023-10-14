/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { type FC } from 'react'
import { type Mods, classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next';
import { Text, TextTag, TextTheme, TitleTag } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import type { Profile } from '../../model/types/profile';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { type Currency, CurrencySelect } from 'entities/Currency';
import { type Country } from "entities/Country/model/consts/country";
import { CountrySelect } from 'entities/Country';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    readonly?: boolean;
    onChangeFirstname?: (value?: string) => void;
    onChangeLastname?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (country: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}

export const ProfileCard: FC<ProfileCardProps> = (props: ProfileCardProps) => {
    const { 
        className, 
        data, 
        error, 
        isLoading,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props

    const { t } = useTranslation('profile');

    if(isLoading) {
        return (
            <div className={classNames(cls['profile-card'], {[cls.loading]: true}, [className])}>
                <Loader />
            </div>
        )
    }

    if(error) {
        return (
            <div className={classNames(cls['profile-card'], {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={{ content: t('Произошла ошибка при загрузке профиля'), tag: TitleTag.H1 }}
                    text={[{content: 'error', tag: TextTag.P}]}
                />
            </div>
        )
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    }
    
    return (
        <div className={classNames(cls['profile-card'], mods, [className])}>
            <div className={ cls.data }>
                {data?.avatar && (
                    <div className={cls['avatar-wrapper']}>
                        <Avatar src={ data?.avatar } />
                    </div>
                )}
                <Input 
                    value={ data?.first }
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                    onChange={ onChangeFirstname }
                    readonly={ readonly }
                    data-testid="ProfileCard.firstname"
                />
                <Input 
                    value={ data?.lastname }
                    placeholder={t('Ваша фамилия')}
                    className={cls.input}
                    onChange={ onChangeLastname }
                    readonly={ readonly }
                    data-testid="ProfileCard.lastname"
                />
                <Input 
                    value={ data?.age }
                    placeholder={t('Ваш возраст')}
                    className={cls.input}
                    onChange={ onChangeAge }
                    readonly={ readonly }
                    data-testid="ProfileCard.age"
                />
                <Input 
                    value={ data?.city }
                    placeholder={t('Ваш город')}
                    className={cls.input}
                    onChange={ onChangeCity }
                    readonly={ readonly }
                    data-testid="ProfileCard.city"
                />
                <Input 
                    value={ data?.username }
                    placeholder={t('Ваш ник')}
                    className={cls.input}
                    onChange={ onChangeUsername }
                    readonly={ readonly }
                    data-testid="ProfileCard.username"
                />
                <Input 
                    value={ data?.avatar }
                    placeholder={t('Ваш аватар')}
                    className={cls.input}
                    onChange={ onChangeAvatar }
                    readonly={ readonly }
                    data-testid="ProfileCard.avatar"
                />
                <CurrencySelect 
                    value={ data?.currency }
                    onChange={ onChangeCurrency } 
                    readonly={ readonly }
                />
                <CountrySelect 
                    value={ data?.country }
                    onChange={ onChangeCountry } 
                    readonly={ readonly }
                    className={cls.select}
                />
            </div>
        </div>
    );
};