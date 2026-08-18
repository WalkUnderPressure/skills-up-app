import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useFeatureFlags, useUpdateUserFeatures } from '~/entities/User';
import { Toggle } from '~/shared/ui/redesigned/Toggle';
import { Card } from '~/shared/ui/redesigned/Card';
import { Text } from '~/shared/ui/redesigned/Text';
import classNames from '~/shared/lib/classNames';

type SettingsPageProps = PropsWithClassName;

const SettingsPage = memo((props: SettingsPageProps) => {
  const { className } = props;

  const { t } = useTranslation(['common', 'pages.settings']);

  const featureFlags = useFeatureFlags();
  const isRedesignEnabled = featureFlags.redesign;

  const updateUserFeatures = useUpdateUserFeatures();
  const [isSettingsUpdate, setIsSettingsUpdate] = useState(false);

  const onRedesignEnabledChange = (newRedesignEnabled: boolean) => {
    setIsSettingsUpdate(true);

    updateUserFeatures({
      redesign: newRedesignEnabled,
    }).finally(() => {
      setIsSettingsUpdate(false);
    });
  };

  return (
    <div className={classNames('', {}, [className])}>
      <Card fullW>
        <Text title={t('menu.settings', { defaultValue: 'Settings' })} />

        <Toggle
          label={t('select-design', { defaultValue: 'Show new design', ns: 'pages.settings' })}
          enabled={isRedesignEnabled}
          onChange={onRedesignEnabledChange}
          disabled={isSettingsUpdate}
        />
      </Card>
    </div>
  );
});

export default SettingsPage;
