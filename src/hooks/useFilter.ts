import { useMemo } from 'react';

import { data } from '../data/data_cards';
import { compareType, filterByRange, filterByValue } from '../util/helperFunctions';
import { ICard, IFilters } from '../types';

const CONVERT_THOUSAND = 1000;
const useFilter = ({
  brand,
  size,
  processor,
  popularly,
  select,
  quantity: [minTotal, maxTotal],
  price: [minSum, maxSum],
}: IFilters) => {
  const filteredCards = useMemo(() => {
    const filteredData = filterByValue<ICard>(data, [
      ['brand', brand],
      ['size', size],
      ['processor', processor],
      ['popularly', popularly],
    ]);
    return filterByRange(filteredData, [
      ['quantity', [minTotal, maxTotal]],
      ['price', [minSum * CONVERT_THOUSAND, maxSum * CONVERT_THOUSAND]],
    ]);
  },
  [brand, size, processor, popularly, minTotal, maxTotal, minSum, maxSum]);
  return useMemo(() => {
    if (!select) return filteredCards;
    const sortCards = [...filteredCards].sort((cardA, cardB) => {
      const [key, isAsc]: [keyof ICard, boolean] = JSON.parse(select);
      const fieldA = cardA[key];
      const fieldB = cardB[key];
      return compareType(fieldA, fieldB, isAsc);
    });
    return sortCards;
  }, [select, filteredCards]);
};
export default useFilter;
