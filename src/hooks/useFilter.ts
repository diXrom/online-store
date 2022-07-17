import { useMemo } from 'react';

import { data } from '../data/data_cards';
import { compareType, convertArrayByValue, filterByRange, filterByValue } from '../util/helperFunctions';
import { ICard, IFilters } from '../types';

const CONVERT_THOUSAND = 1000;

const useFilter = ({
  filters,
  select,
  quantity: [minTotal, maxTotal],
  price: [minSum, maxSum],
}: IFilters) => {
  const filteredByValue = useMemo(() => {
    const array = convertArrayByValue(filters);
    const filteredData = filterByValue<ICard>(data, array);
    return filterByRange(filteredData, [
      ['quantity', [minTotal, maxTotal]],
      ['price', [minSum * CONVERT_THOUSAND, maxSum * CONVERT_THOUSAND]],
    ]);
  },
  [filters, minTotal, maxTotal, minSum, maxSum]);

  const filteredByRange = useMemo(() => {
    if (!select) return filteredByValue;
    const sortCards = [...filteredByValue].sort((cardA, cardB) => {
      const [key, isAsc]: [keyof ICard, boolean] = JSON.parse(select);
      const fieldA = cardA[key];
      const fieldB = cardB[key];
      return compareType(fieldA, fieldB, isAsc);
    });
    return sortCards;
  }, [select, filteredByValue]);

  return filteredByRange;
};
export default useFilter;
