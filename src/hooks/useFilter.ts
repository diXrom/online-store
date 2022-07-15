
import { useMemo } from 'react';
import { data } from '../data/data_cards';
import { ICard, IFilters } from '../types';

const compareType = (itemA: string | number | boolean, itemB: string | number | boolean, bool: boolean) => {
  if (typeof itemA === 'string' && typeof itemB === 'string') {
    return !bool ? itemA.localeCompare(itemB) : itemB.localeCompare(itemA);
  }
  if (typeof itemA === 'number' && typeof itemB === 'number') {
    return !bool ? itemB - itemA : itemA - itemB;
  }
  return 0;
};

const useFilter = ({
  brand,
  size,
  processor,
  popularly,
  select,
  quantity: [minTotal, maxTotal],
  price: [minSum, maxSum],
}: IFilters) => {
  const filteredCards = useMemo(() => data
    .filter((card) => (brand.length ? brand.some((value) => card.brand === value) : true))
    .filter((card) => (size.length ? size.some((value) => card.size === value) : true))
    .filter((card) => (processor.length ? processor.some((value) => card.processor === value) : true))
    .filter((card) => (popularly.length ? popularly.some((value) => card.popularly === value) : true))
    .filter(({ quantity }) => maxTotal >= quantity && quantity >= minTotal)
    .filter(({ price }) => maxSum * 1000 >= price && price >= minSum * 1000),
  [brand, size, processor, popularly, maxTotal, minTotal, maxSum, minSum]);
  return useMemo(() => {
    if (!select) return filteredCards;
    const sortCards = [...filteredCards].sort((cardA, cardB) => {
      const [key, bool]: [keyof ICard, boolean] = JSON.parse(select);
      const fieldA = cardA[key];
      const fieldB = cardB[key];
      return compareType(fieldA, fieldB, bool);
    });
    return sortCards;
  }, [select, filteredCards]);
};
export default useFilter;