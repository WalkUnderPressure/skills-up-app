import { Select, SelectOption, SelectProps } from 'shared/ui/Select';
import { CountryMap } from '../model/types/countries';

type CountrySelectProps = {
  className?: string;
  value?: string;
  label?: string;
  onChange?: (value: string) => void;
} & Omit<SelectProps, 'options'>;

const COUNTRY_OPTIONS: Array<SelectOption> = CountryMap.map((country) => ({
  label: country,
  value: country,
}));

const CountrySelect = (props: CountrySelectProps) => {
  const { value, label, className, onChange, ...restProps } = props;

  return (
    <Select
      {...restProps}
      className={className}
      onChange={onChange}
      value={value}
      label={label}
      options={COUNTRY_OPTIONS}
    />
  );
};

export default CountrySelect;
