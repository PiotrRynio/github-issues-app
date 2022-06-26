import React, { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import { theme } from 'assets/styles';
import { GlobalStyles } from 'assets/styles';
import { usePageTitle } from 'hooks/usePageTitle';
import { PageTitleProvider } from './appProviders';
import { AppContextProvider } from './appProviders';

const queryClient = new QueryClient();

export const AllAppProviders = ({ children }: { children: ReactNode }) => {
  const { pageTitle } = usePageTitle();

  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <PageTitleProvider>
          <ThemeProvider theme={theme}>
            <Helmet>
              <title>{pageTitle}</title>
              <meta name="description" content="Helmet application" />
            </Helmet>
            <GlobalStyles theme={theme} />
            {children}
          </ThemeProvider>
        </PageTitleProvider>
      </AppContextProvider>
    </QueryClientProvider>
  );
};
