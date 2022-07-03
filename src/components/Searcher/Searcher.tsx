import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useDebounce } from 'hooks';
import { StyledInput } from './Searcher.styles';

export const Searcher = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const debouncedCallback = (debouncedValue: string) => {
    if (pathname !== '/') {
      navigate(`/?query=${debouncedValue}`);
    } else {
      const params = { query: debouncedValue };
      setSearchParams(params);
    }
  };

  const { debouncingValue, setDebouncingValue } = useDebounce<string>({
    initialValue: searchParams.get('query') || '',
    delay: 1000,
    debouncedCallback,
  });

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
