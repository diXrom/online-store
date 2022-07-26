import { useMemo } from 'react';

import { data } from '../data/data_cards';
import { compareType, convertArrayByValue, filterByRange, filterByValue } from '../util/helperFunctions';
import { ICard, IFilters } from '../types';

const convertNumberToThousand = (num: number) => 1000 * num;

const useFilter = ({
  filters,
  select,
  quantity: [minTotal, maxTotal],
  price: [minSum, maxSum],
}: IFilters) => {
  const filteredByValue = useMemo(() => {
    const filteredData = filterByValue<ICard>(data, convertArrayByValue(filters));
    return filterByRange(filteredData, [
      ['quantity', [minTotal, maxTotal]],
      ['price', [convertNumberToThousand(minSum), convertNumberToThousand(maxSum)]],
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
