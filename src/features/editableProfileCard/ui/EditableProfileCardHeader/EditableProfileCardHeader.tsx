/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { useCallback, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './EditableProfileCardHeader.module.scss'
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Text, TitleTag } from '@/shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { type AnyAction } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { useSelector } from 'react-redux';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';

interface ProfilePageHeaderProps {
    className?: string;
    readonly?: boolean;
}

export const EditableProfileCardHeader: FC<ProfilePageHeaderProps> = (props: ProfilePageHeaderProps) => {
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
        dispatch(updateProfileData() as unknown as AnyAction);
    }, [dispatch]);

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
                                data-testid="EditableProfileCardHeader.EditButton"
                            >
                                {t('Редактировать')}
                            </Button>) :
                            (<div className={cls.btns}>
                                <Button 
                                    className={cls['save-btn']} 
                                    theme={ ButtonTheme.OUTLINE }
                                    onClick={ onSave }
                                    data-testid="EditableProfileCardHeader.SaveButton"
                                >
                                    {t('Сохранить')}
                                </Button>
                                <Button 
                                    className={cls['cancel-btn']} 
                                    theme={ ButtonTheme.OUTLINE_RED }
                                    onClick={ onCancel }
                                    data-testid="EditableProfileCardHeader.CancelButton"
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