/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable react/display-name */
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './EditableProfileCard.module.scss';
import { memo, useCallback } from 'react';
import type { AnyAction } from '@reduxjs/toolkit';
import type { Country } from '@/entities/Country';
import type { Currency } from '@/entities/Currency';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { TextTheme, TextTag, Text } from '@/shared/ui/Text';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';
import { ProfileCard } from '@/entities/Profile';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { ValidateProfileError } from '../../model/consts/consts';
import { DynamicModuleLoader, type ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

interface EditableProfileCardProps {
    className?: string;
    id?: string;
}

const reducers: ReducersList = {
    profile: profileReducer,
};

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const { className } = props;
    const { t } = useTranslation('profile')
    const dispatch = useAppDispatch();

    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const formData = useSelector(getProfileForm);
    const validateErrors = useSelector(getProfileValidateErrors);
    const { id } = useParams<{ id: string }>(); 

    const validateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка при сохранении'),
        [ValidateProfileError.INCORRECT_AGE]: t('Неправильный возраст'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Страна обязательна'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Имя и фамилия обязательны'),
        [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
    }

    const errorTranslates = (): string[] => {
        if(!validateErrors?.length) {
            return [];
        }
        return validateErrors?.map(error => validateErrorTranslates[error])
    }

    useInitialEffect(() => {
        if(id) {
            dispatch(fetchProfileData(id) as unknown as AnyAction)
        } else {
            return <Text text={[{content: t('Профиль не найден'), tag: TextTag.P}]} />;
        }
        
    })

    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ first: value ?? '' }));
    }, [dispatch]);

    const onChangeLastname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value ?? '' }));
    }, [dispatch]);

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value ?? '' }));
    }, [dispatch]);

    const onChangeAge = useCallback((value?: string) => {
        if(!Number.isNaN(Number(value))) {
            dispatch(profileActions.updateProfile({ age: Number(value ?? 0) }));
        }
    }, [dispatch]);

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ username: value ?? '' }));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value ?? '' }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((currency: Currency) => {
        dispatch(profileActions.updateProfile({ currency }));
    }, [dispatch]);

    const onChangeCountry = useCallback((country: Country) => {
        dispatch(profileActions.updateProfile({ country }));
    }, [dispatch]);
    
    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.EditableProfileCard, {}, [className])}>
                <EditableProfileCardHeader readonly={readonly} />
                {errorTranslates() && (
                    <Text 
                        data-testid="EditableProfileCard.Error"
                        theme={TextTheme.ERROR} 
                        text={errorTranslates().map(item => {
                            return {
                                content: item,
                                tag: TextTag.P
                            }
                        })} 
                    />
                )}
                <ProfileCard
                    data={ formData } 
                    isLoading={ isLoading }
                    error={ error }
                    onChangeFirstname={ onChangeFirstname }
                    onChangeLastname={ onChangeLastname }
                    onChangeCity={ onChangeCity }
                    onChangeAge={ onChangeAge }
                    onChangeUsername={ onChangeUsername }
                    onChangeAvatar={ onChangeAvatar }
                    onChangeCurrency={ onChangeCurrency }
                    onChangeCountry={ onChangeCountry }
                    readonly={ readonly }
                />
            </div>
        </DynamicModuleLoader>
        
    );
});