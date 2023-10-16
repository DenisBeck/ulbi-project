/* eslint-disable react/display-name */
import { useCallback, type FC, memo } from 'react'
import { Select } from '@/shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { Country } from '../../model/consts/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    {value: Country.Armenia, content: Country.Armenia},
    {value: Country.Belarus, content: Country.Belarus},
    {value: Country.Kazakhstan, content: Country.Kazakhstan},
    {value: Country.Russia, content: Country.Russia},
    {value: Country.Ukraine, content: Country.Ukraine},
]

export const CountrySelect: FC<CountrySelectProps> = memo((props: CountrySelectProps) => {
    const {
        value,
        onChange,
        readonly
    } = props
    const { t } = useTranslation('profile');

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange])
    
    return (
        <Select 
            label={t('Укажите страну')}
            options={ options }
            value={ value }
            onChange={ onChangeHandler }
            readonly={ readonly }
        />
    );
});