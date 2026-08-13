import {
  ListBox as ListBoxDeprecated,
  ListBoxItem,
  ListBoxProps,
} from '~/shared/ui/deprecated/Popups';
import { ListBox } from '~/shared/ui/redesigned/Popups';
import { CountryMap, CountryMapKey } from '../model/types/countries';
import { ToggleFeatures } from '~/entities/FeatureFlags';

type CountrySelectProps = {
  value?: string;
  label?: string;
  onChange?: (value: string) => void;
} & ListBoxProps<CountryMapKey> &
  PropsWithClassName &
  PropsWithDataTestId;

const COUNTRY_OPTIONS: Array<ListBoxItem<CountryMapKey>> = Object.entries(CountryMap).map(
  ([countryName, countryValue]) => ({
    label: countryName,
    value: countryValue,
  }),
);

const CountrySelect = (props: CountrySelectProps) => {
  const { value, defaultValue, label, className, onChange, ...restProps } = props;

  const itemProps: ListBoxProps<CountryMapKey> = {
    ...restProps,
    className,
    label,
    onChange,
    value,
    defaultValue,
    items: COUNTRY_OPTIONS,
  };

  return (
    <ToggleFeatures
      feature="redesign"
      on={<ListBox {...itemProps} />}
      off={<ListBoxDeprecated {...itemProps} />}
    />
  );
};

export default CountrySelect;
