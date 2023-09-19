/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { useCallback, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfilePageHeader.module.scss'
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text, TitleTag } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { getProfileData, profileActions, updateProfileData } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { type AnyAction } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { useSelector } from 'react-redux';

interface ProfilePageHeaderProps {
    className?: string;
    readonly?: boolean;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = (props: ProfilePageHeaderProps) => {
    const {
        className,
        readonly
    } = props;
    const { t } = useTranslation('profile');
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const dispatch = useAppDispatch();

    const canEdit = authData?.id === profileData?.id;

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData(profileData?.id as string) as unknown as AnyAction);
    }, [dispatch, profileData]);

    const onCancel = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    return (
        <div className={classNames(cls['profile-page-header'], {}, [className])}>
            <Text title={{content: t('Профиль'), tag: TitleTag.H1}} />
            {canEdit && (
                <div className={cls['btns-wrapper']}>
                    {
                        readonly ?
                            (<Button 
                                className={cls['edit-btn']} 
                                theme={ ButtonTheme.OUTLINE }
                                onClick={ onEdit }
                            >
                                {t('Редактировать')}
                            </Button>) :
                            (<div className={cls.btns}>
                                <Button 
                                    className={cls['save-btn']} 
                                    theme={ ButtonTheme.OUTLINE }
                                    onClick={ onSave }
                                >
                                    {t('Сохранить')}
                                </Button>
                                <Button 
                                    className={cls['cancel-btn']} 
                                    theme={ ButtonTheme.OUTLINE_RED }
                                    onClick={ onCancel }
                                >
                                    {t('Отменить')}
                                </Button>
                            </div>)
                    }
                </div>
            )}
        </div>
    );
};