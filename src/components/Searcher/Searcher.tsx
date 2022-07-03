import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { StyledInput } from './Searcher.styles';

export const Searcher = () => {
  const [searchedText, setSearchedText] = useState('');
  const [, setSearchParams] = useSearchParams();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchedText(value);

    const trimmedValue = value.trim();
    const formattedValue = trimmedValue.replace(/\s+/g, ' ');

    const params = { query: formattedValue };
    setSearchParams(params);
  };

  return (
    <label>
      <StyledInput type="text" placeholder="Search" value={searchedText} onChange={handleChange} />
    </label>
  );
};
