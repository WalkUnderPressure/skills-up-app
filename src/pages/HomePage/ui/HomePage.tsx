import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation('pages.home');

  return (
    <div>
      <h3>{t('title', { defaultValue: 'Home page' })}</h3>
    </div>
  );
};

export default HomePage;
