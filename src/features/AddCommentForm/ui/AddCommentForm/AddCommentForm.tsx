import { useCallback, type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AddCommentForm.module.scss'
import { Input } from 'shared/ui/Input/Input';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice';
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
// import { sendComment } from 'features/AddCommentForm/model/services/sendComment/sendComment';
// import type { AnyAction } from '@reduxjs/toolkit';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer
}

// eslint-disable-next-line react/display-name
const AddCommentForm: FC<AddCommentFormProps> = memo((props: AddCommentFormProps) => {
    const {
        className,
        onSendComment
    } = props;
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();

    const text = useSelector(getAddCommentFormText);
    // const error = useSelector(getAddCommentFormError);
    
    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value))
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        onSendComment(text ?? '');
        onCommentTextChange('');
    }, [onSendComment, onCommentTextChange, text])

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls['add-comment-form'], {}, [className])}>
                <Input 
                    placeholder={t('Введите текст комментария')}
                    value={text}
                    onChange={onCommentTextChange}
                    className={cls['add-comment-input']}
                />
                <Button 
                    theme={ButtonTheme.OUTLINE}
                    onClick={onSendHandler}
                >
                    {t('Отправить')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;