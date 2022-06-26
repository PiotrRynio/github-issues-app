import React, { createContext, useState } from 'react';

type PageTitleContextType = {
  pageTitle: string;
  setPageTitle: (newTitle: string) => void;
};

const pageTitleContextDefaultValue = {
  pageTitle: 'example page title',
  setPageTitle: () => {},
};

const PageTabTitleContext = createContext<PageTitleContextType>(pageTitleContextDefaultValue);

const PageTitleProvider = ({ children }: { children: React.ReactNode }) => {
  const [pageTitle, setPageTitle] = useState<string>(pageTitleContextDefaultValue.pageTitle);

  return <PageTabTitleContext.Provider value={{ pageTitle, setPageTitle }}>{children}</PageTabTitleContext.Provider>;
};

export { PageTitleProvider, PageTabTitleContext };
