
import { useMemo } from 'react';
import { data } from '../data/data_cards';
import { ICard, IFilters } from '../types';
import { compareType } from '../util/helperFunctions';

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
      const [key, isAsc]: [keyof ICard, boolean] = JSON.parse(select);
      const fieldA = cardA[key];
      const fieldB = cardB[key];
      return compareType(fieldA, fieldB, isAsc);
    });
    return sortCards;
  }, [select, filteredCards]);
};
export default useFilter;