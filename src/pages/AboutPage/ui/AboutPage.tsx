import { useTranslation } from 'react-i18next';

import { AppImage } from '~/shared/ui/deprecated/AppImage';
import { Page } from '~/widgets/Page';
import HtmlImage from '~/shared/assets/images/html.png';

export const AboutPageDataTestId = 'AboutPageDataTestId';

export type AboutPageProps = PropsWithClassName;

const AboutPage = (props: AboutPageProps) => {
  const { className } = props;

  const { t } = useTranslation('pages.about');

  return (
    <Page className={className} data-testid={AboutPageDataTestId}>
      <h3>{t('title', { defaultValue: 'About page' })}</h3>

      <AppImage src={HtmlImage} />
    </Page>
  );
};

export default AboutPage;
