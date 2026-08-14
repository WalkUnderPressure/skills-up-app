import { useTranslation } from 'react-i18next';

import { Text as TextDeprecated, TextTheme } from '~/shared/ui/deprecated/Text';
import { ToggleFeatures } from '~/entities/FeatureFlags';
import { Text } from '~/shared/ui/redesigned/Text';
import classNames from '~/shared/lib/classNames';
import cls from '../PostsList.module.scss';

const NoPostsBanner = () => {
  const { t } = useTranslation();

  return (
    <ToggleFeatures
      feature="redesign"
      on={
        <Text
          title={t('empty', {
            defaultValue: 'No publications with the specified parameters were found',
          })}
          variant="warn"
          className={classNames(cls['empty-redesigned'])}
        />
      }
      off={
        <TextDeprecated
          title={t('empty', {
            defaultValue: 'No publications with the specified parameters were found',
          })}
          theme={TextTheme.WARN}
          className={classNames(cls.empty)}
        />
      }
    />
  );
};

export default NoPostsBanner;
