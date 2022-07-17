import useDebounce from './useDebounce';
import useLocalStorage from './useLocalStorage';
import { ICard } from '../types';

const useSearchByName = (items: ICard[]) => {
  const [query, setQuery] = useLocalStorage('', 'query');
  const queryDebounce = useDebounce(query, 400);
  const changeQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  const availableItems = queryDebounce
    ? items.filter((item) => RegExp(queryDebounce, 'i').test(item.name))
    : items;

  return { query, setQuery, changeQuery, availableItems };
};

export default useSearchByName;
