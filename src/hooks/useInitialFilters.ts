import { SelectChangeEvent } from '@mui/material';
import { useCallback } from 'react';

import useLocalStorage from './useLocalStorage';

const useInitialFilters = () => {
  const [quantity, setQuantity] = useLocalStorage<number[]>([0, 10], 'quantity');
  const [price, setPrice] = useLocalStorage<number[]>([0, 200], 'price');
  const [select, setSelect] = useLocalStorage('', 'select');
  const [filters, setFilters] = useLocalStorage<string[]>([], 'filters');

  const changeFilters = useCallback(
    (e: React.MouseEvent<HTMLElement>, newFilters: string[]) => setFilters(newFilters), [setFilters],
  );
  const changeSelect = useCallback((e: SelectChangeEvent) => setSelect(e.target.value), [setSelect]);
  const changeQuantity = useCallback((e: Event, newQuantity: number | number[]) => {
    if (Array.isArray(newQuantity)) setQuantity(newQuantity);
  }, [setQuantity]);
  const changePrice = useCallback((e: Event, newPrice: number | number[]) => {
    if (Array.isArray(newPrice)) setPrice(newPrice);
  }, [setPrice]);

  const setAllFilters = useCallback((
    selectInit = '',
    filtersInit = () => [],
    quantityInit = [0, 10],
    priceInit = [0, 200],
  ) => {
    setFilters(filtersInit);
    setQuantity(quantityInit);
    setPrice(priceInit);
    setSelect(selectInit);
  }, [setSelect, setPrice, setQuantity, setFilters]);
  return {
    filters,
    quantity,
    price,
    select,
    changeFilters,
    changeQuantity,
    changePrice,
    changeSelect,
    setAllFilters,
  };
};
export default useInitialFilters;
