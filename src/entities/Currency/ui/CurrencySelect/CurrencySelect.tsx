/* eslint-disable react/display-name */
import { useCallback, type FC, memo } from 'react'
// import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { Currency } from '../../model/consts/currency';
import { ListBox } from 'shared/ui/ListBox/ListBox';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    {value: Currency.RUB, content: Currency.RUB},
    {value: Currency.EUR, content: Currency.EUR},
    {value: Currency.USD, content: Currency.USD},
]

export const CurrencySelect: FC<CurrencySelectProps> = memo((props: CurrencySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly
    } = props
    const { t } = useTranslation('profile');

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange])
    
    return (
        <ListBox 
            className={className}
            defaultValue={t('Укажите валюту')}
            onChange={onChangeHandler}
            selectedValue={value}
            items={options}
            readonly={ readonly }
            direction={'top right'}
            label={t('Укажите валюту')}
        />
    );
});