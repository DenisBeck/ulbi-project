/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { type FC, useCallback } from 'react'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ProfileCard, fetchProfileData, getProfileError, getProfileForm, getProfileIsLoading, getProfileReadonly, getProfileValidateErrors, profileActions, profileReducer } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { type AnyAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import type { Currency } from 'entities/Currency';
import type { Country } from 'entities/Country';
import { Text, TextTag, TextTheme } from 'shared/ui/Text/Text';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { useTranslation } from 'react-i18next';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useParams } from 'react-router-dom';
import { Page } from 'shared/ui/Page/Page';

const reducers: ReducersList = {
    profile: profileReducer
}

interface ProfilePageProps {
    className?: string;
}

const ProfilePage: FC<ProfilePageProps> = ({className}: ProfilePageProps) => {
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
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page>
                <ProfilePageHeader readonly={ readonly } />
                {errorTranslates() && (
                    <Text 
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
            </Page>
        </DynamicModuleLoader>
        
    );
};

export default ProfilePage