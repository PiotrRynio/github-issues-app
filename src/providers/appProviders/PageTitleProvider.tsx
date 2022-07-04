import React, { createContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';

type PageTitleContextType = {
  pageTitle: string;
  setPageTitle: (newTitle?: string) => void;
};

const pageTitleContextDefaultValue = {
  pageTitle: 'Github Issues App',
  setPageTitle: (newTitle?: string) => {},
};

const PageTabTitleContext = createContext<PageTitleContextType>(pageTitleContextDefaultValue);

const PageTitleProvider = ({ children }: { children: React.ReactNode }) => {
  const [pageTitle, setPageTitle] = useState<string>(pageTitleContextDefaultValue.pageTitle);

  const setTitle = (newTitle?: string) => {
    setPageTitle(newTitle || 'Github Issues App');
  };

  return (
    <PageTabTitleContext.Provider value={{ pageTitle, setPageTitle: setTitle }}>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      {children}
    </PageTabTitleContext.Provider>
  );
};

export { PageTitleProvider, PageTabTitleContext };
