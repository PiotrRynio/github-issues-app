import { useContext } from 'react';
import { AppContext } from 'providers';

export const useAppContext = () => useContext(AppContext);
