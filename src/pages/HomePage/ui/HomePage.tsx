import { useTranslation } from 'react-i18next';

import classNames from 'shared/lib/classNames';

export type HomePageProps = {
  className?: string;
};

const HomePage = (props: HomePageProps) => {
  const { className } = props;

  const { t } = useTranslation('pages.home');

  return (
    <div className={classNames(className)}>
      <h3>{t('title', { defaultValue: 'Home page' })}</h3>
    </div>
  );
};

export default HomePage;
