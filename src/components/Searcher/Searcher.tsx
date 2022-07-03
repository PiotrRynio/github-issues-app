import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { StyledInput } from './Searcher.styles';

export const Searcher = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const trimmedValue = value.trim();
    const formattedValue = trimmedValue.replace(/\s+/g, ' ');

    if (pathname !== '/') {
      navigate(`/?query=${formattedValue}`);
    } else {
      const params = { query: formattedValue };
      setSearchParams(params);
    }
  };

  return (
    <label>
      <StyledInput type="text" placeholder="Search" value={searchParams.get('query') || ''} onChange={handleChange} />
    </label>
  );
};
