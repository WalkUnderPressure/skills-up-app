import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { ReactNode } from 'react';

import i18n, { DEFAULT_LNG, DEFAULT_NS } from 'shared/config/i18n/i18nForTests';
import { I18nAddResource } from 'shared/lib/tests/renderWithTranslations/types';

function renderWithTranslations(component: ReactNode, resources: Array<I18nAddResource> = []) {
  resources.forEach((resource) => {
    const { lng = DEFAULT_LNG, ns = DEFAULT_NS, resources } = resource;

    i18n.addResources(lng, ns, resources);
  });

  return render(<I18nextProvider i18n={i18n}>{component}</I18nextProvider>);
}

export default renderWithTranslations;
