import { useContext } from 'react';
import { PageTabTitleContext } from 'providers';

export const usePageTitle = () => useContext(PageTabTitleContext);
