import React, { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { GlobalStyles, theme } from 'assets/styles/themes/primaryTheme';
import { fontsPaths } from 'assets/styles';
import { PageTitleProvider } from './appProviders';

export const AllAppProviders = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient();

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <PageTitleProvider>
          <ThemeProvider theme={theme}>
            <Helmet>
              <meta name="description" content="Github searcher application" />
              <link rel="stylesheet" href={fontsPaths.primaryFont} />
            </Helmet>
            <GlobalStyles theme={theme} />
            {children}
          </ThemeProvider>
        </PageTitleProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};
