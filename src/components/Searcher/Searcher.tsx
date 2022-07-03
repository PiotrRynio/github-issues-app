import { useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useDebounce } from 'hooks';
import { StyledInput } from './Searcher.styles';

export const Searcher = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const debouncedCallback = (debouncedValue: string) => {
    const isHomePage = pathname === '/';
    const isSearchingOnOtherPage = !isHomePage && !!debouncedValue;

    if (isSearchingOnOtherPage) {
      navigate(`/?query=${debouncedValue}`);
      return;
    }
    if (!isHomePage) {
      return;
    }

    if (searchParams.get('query') === null && !debouncingValue) {
      return;
    }

    const params = { query: debouncedValue };
    setSearchParams(params);
  };

  const { debouncingValue, setDebouncingValue, setValueWithoutCallback } = useDebounce<string>({
    initialValue: searchParams.get('query') || '',
    delay: 1000,
    debouncedCallback,
  });

  useEffect(() => {
    if (searchParams.get('query') !== debouncingValue) {
      setValueWithoutCallback(searchParams.get('query') || '');
    }
  }, [searchParams, setDebouncingValue]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const trimmedValue = value.trim();
    const formattedValue = trimmedValue.replace(/\s+/g, ' ');
    setDebouncingValue(formattedValue);
  };

  return (
    <label>
      <StyledInput type="text" placeholder="Search" value={debouncingValue} onChange={handleChange} />
    </label>
  );
};
