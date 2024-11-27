import ListBox, { ListBoxItem, ListBoxProps } from 'shared/ui/ListBox';
import { CountryMap, CountryMapKey } from '../model/types/countries';

type CountrySelectProps = {
  className?: string;
  value?: string;
  label?: string;
  onChange?: (value: string) => void;
} & ListBoxProps<CountryMapKey>;

const COUNTRY_OPTIONS: Array<ListBoxItem<CountryMapKey>> = Object.entries(CountryMap).map(
  ([countryName, countryValue]) => ({
    content: countryName,
    value: countryValue,
  }),
);

const CountrySelect = (props: CountrySelectProps) => {
  const { value, defaultValue, label, className, onChange, ...restProps } = props;

  return (
    <ListBox<CountryMapKey>
      {...restProps}
      className={className}
      label={label}
      onChange={onChange}
      value={value}
      defaultValue={defaultValue}
      items={COUNTRY_OPTIONS}
    />
  );
};

export default CountrySelect;
