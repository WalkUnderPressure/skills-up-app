import { useTranslation } from 'react-i18next';

import { Button, ButtonRounded, ButtonSize, ButtonTheme } from 'shared/ui/Button';
import { AppRoutes, RouterPaths } from 'shared/config/routerConfig';
import { AppLink } from 'shared/ui/AppLink';
import * as cls from './BackToBlogBtn.module.scss';

const BackToBlogBtn = () => {
  const { t } = useTranslation('pages.blog');

  return (
    <Button
      theme={ButtonTheme.BG_INVERTED}
      rounded={ButtonRounded.L}
      size={ButtonSize.L}
      className={cls['back-btn']}
    >
      <AppLink to={RouterPaths[AppRoutes.BLOG]}>
        {'<< ' + t('back-to-blog', { defaultValue: 'Back to blog' })}
      </AppLink>
    </Button>
  );
};

export default BackToBlogBtn;
