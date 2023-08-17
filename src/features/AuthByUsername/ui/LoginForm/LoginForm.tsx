/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable react/display-name */
import { memo, type FC, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input} from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from '../..//model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { type AnyAction } from '@reduxjs/toolkit';
import { Text, TextTheme } from 'shared/ui/Text/Text';

interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = memo(({className}: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { username, password, error, isLoading } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }) as unknown as AnyAction);
    }, [dispatch, username, password]);

    return (
        <div className={classNames(cls['login-form'], {}, [className])}>
            <Text title={ t('Форма авторизации') } />
            { error && <Text text={ error } theme={ TextTheme.ERROR } /> }
            <Input 
                placeholder={t('Введите имя пользователя')} 
                autofocus 
                onChange={ onChangeUsername }
                value={username}
            />
            <Input 
                placeholder={ t('Введите пароль') } 
                onChange={ onChangePassword }
                value={password}
            />
            <Button 
                className={cls['login-btn']}
                theme={ButtonTheme.OUTLINE}
                onClick={ onLoginClick }
                disabled={ isLoading }
            >
                {t('Войти')}
            </Button>
        </div>
    );
});