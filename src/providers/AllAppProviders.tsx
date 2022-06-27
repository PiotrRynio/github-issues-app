import React, { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import { GlobalStyles, theme } from 'assets/styles';
import { usePageTitle } from 'hooks/usePageTitle/usePageTitle';
import { PageTitleProvider } from './appProviders';

export const AllAppProviders = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient();
  const { pageTitle } = usePageTitle();

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
};
