import React, { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import { GlobalStyles, theme } from 'assets/styles';
import { usePageTitle } from 'hooks/usePageTitle/usePageTitle';
import { PageTitleProvider } from './appProviders';
import { fontsPaths } from 'assets/styles';

export const AllAppProviders = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient();
  const { pageTitle } = usePageTitle();

  return (
    <QueryClientProvider client={queryClient}>
      <PageTitleProvider>
        <ThemeProvider theme={theme}>
          <Helmet>
            <title>{pageTitle}</title>
            <meta name="description" content="Github searcher application" />
            <link rel="stylesheet" href={fontsPaths.primaryFont} />
          </Helmet>
          <GlobalStyles theme={theme} />
          {children}
        </ThemeProvider>
      </PageTitleProvider>
    </QueryClientProvider>
  );
};
