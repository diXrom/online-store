import { useState } from 'react';
import { ICard } from '../types';

import useDebounce from './useDebounce';

const useFilterByName = (items: ICard[]) => {
  const [query, setQuery] = useState('');
  const queryDebounce = useDebounce(query, 300);
  const changeQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  const availableItems = queryDebounce
    ? items.filter((item) => RegExp(queryDebounce, 'i').test(item.name))
    : items;

  return { query, setQuery, changeQuery, availableItems };
};

export default useFilterByName;
