import { useTranslation } from 'react-i18next';

import {
  Button as ButtonDeprecated,
  ButtonRounded,
  ButtonSize,
  ButtonTheme,
} from '~/shared/ui/deprecated/Button';
import { AppLink as AppLinkDeprecated } from '~/shared/ui/deprecated/AppLink';
import { AppLink } from '~/shared/ui/redesigned/AppLink';
import ArrowBack from '~/shared/assets/icons/back-arrow.svg';

import { getRouteBlog } from '~/shared/constants/appRoutes';
import cls from './BackToBlogBtn.module.scss';
import { ToggleFeatures } from '~/entities/User';
import { Text } from '~/shared/ui/redesigned/Text';
import { HStack } from '~/shared/ui/redesigned/Stack';
import { Button } from '~/shared/ui/redesigned/Button';

const BackToBlogBtn = () => {
  const { t } = useTranslation('pages.blog');

  return (
    <ToggleFeatures
      feature="redesign"
      on={
        <Button variant="fill" className={cls['back-btn-redesigned']}>
          <AppLink to={getRouteBlog()}>
            <HStack gap="8">
              <ArrowBack width={24} height={24} fill="currentColor" />
              <Text text={t('back-to-blog', { defaultValue: 'Back to blog' })} />
            </HStack>
          </AppLink>
        </Button>
      }
      off={
        <ButtonDeprecated
          theme={ButtonTheme.BG_INVERTED}
          rounded={ButtonRounded.L}
          size={ButtonSize.L}
          className={cls['back-btn']}
        >
          <AppLinkDeprecated to={getRouteBlog()}>
            {'<< ' + t('back-to-blog', { defaultValue: 'Back to blog' })}
          </AppLinkDeprecated>
        </ButtonDeprecated>
      }
    />
  );
};

export default BackToBlogBtn;
