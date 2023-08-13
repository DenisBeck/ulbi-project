import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input} from 'shared/ui/Input/Input';

interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({className}: LoginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls['login-form'], {}, [className])}>
            <Input placeholder={t('Введите имя пользователя')} autofocus />
            <Input placeholder={t('Введите пароль')} />
            <Button className={cls['login-btn']}>
                {t('Войти')}
            </Button>
        </div>
    );
};