import { createRoot } from 'react-dom/client';

import { RoutingProvider } from 'app/providers/RoutingProvider';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';
import App from 'app/App';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);

  root.render(
    <RoutingProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <StoreProvider>
            <App />
          </StoreProvider>
        </ThemeProvider>
      </ErrorBoundary>
    </RoutingProvider>,
  );
}
