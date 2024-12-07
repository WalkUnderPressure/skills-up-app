import { useTranslation } from 'react-i18next';

import { Button, ButtonRounded, ButtonSize, ButtonTheme } from '~/shared/ui/Button';
import { getRouteBlog } from '~/shared/constants/appRoutes';
import { AppLink } from '~/shared/ui/AppLink';
import cls from './BackToBlogBtn.module.scss';

const BackToBlogBtn = () => {
  const { t } = useTranslation('pages.blog');

  return (
    <Button
      theme={ButtonTheme.BG_INVERTED}
      rounded={ButtonRounded.L}
      size={ButtonSize.L}
      className={cls['back-btn']}
    >
      <AppLink to={getRouteBlog()}>
        {'<< ' + t('back-to-blog', { defaultValue: 'Back to blog' })}
      </AppLink>
    </Button>
  );
};

export default BackToBlogBtn;
