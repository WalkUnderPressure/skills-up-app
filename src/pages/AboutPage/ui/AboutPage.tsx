import { useTranslation } from 'react-i18next';

import classNames from '~/shared/lib/classNames';
import { Page } from '~/widgets/Page';

import HtmlImage from '~/shared/assets/images/html.png';
import { AppImage } from '~/shared/ui/AppImage';

export type AboutPageProps = PropsWithClassName;

const AboutPage = (props: AboutPageProps) => {
  const { className } = props;

  const { t } = useTranslation('pages.about');

  return (
    <Page className={classNames(className)}>
      <h3>{t('title', { defaultValue: 'About page' })}</h3>

      <AppImage src={HtmlImage} />
    </Page>
  );
};

export default AboutPage;
