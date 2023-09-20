/* eslint-disable react/display-name */
import { useCallback, type FC, memo } from 'react'
import { Select, type SelectOption } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options: SelectOption[]=[
    {value: Currency.RUB, content: Currency.RUB},
    {value: Currency.EUR, content: Currency.EUR},
    {value: Currency.USD, content: Currency.USD},
]

export const CurrencySelect: FC<CurrencySelectProps> = memo((props: CurrencySelectProps) => {
    const {
        value,
        onChange,
        readonly
    } = props
    const { t } = useTranslation('profile');

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange])
    
    return (
        <Select 
            label={t('Укажите валюту')}
            options={ options }
            value={ value }
            onChange={ onChangeHandler }
            readonly={ readonly }
        />
    );
});