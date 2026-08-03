import { ReactNode } from 'react';
import { render } from '@testing-library/react';

import TestProvidersWrapper, { ProvidersOptions } from './TestProvidersWrapper';

function renderWithProviders(component: ReactNode, providersOptions: ProvidersOptions = {}) {
  render(<TestProvidersWrapper options={providersOptions}>{component}</TestProvidersWrapper>);
}

export { renderWithProviders };
