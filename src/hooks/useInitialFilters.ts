import { SelectChangeEvent } from '@mui/material';

import useLocalStorage from './useLocalStorage';

const useInitialFilters = () => {
  const [quantity, setQuantity] = useLocalStorage<number[]>([0, 10], 'quantity');
  const [price, setPrice] = useLocalStorage<number[]>([0, 200], 'price');
  const [select, setSelect] = useLocalStorage('', 'select');
  const [filters, setFilters] = useLocalStorage<string[]>([], 'filters');

  const changeFilters = (e: React.MouseEvent<HTMLElement>, newFilters: string[]) => setFilters(newFilters);
  const changeSelect = (e: SelectChangeEvent) => setSelect(e.target.value);
  const changeQuantity = (e: Event, newQuantity: number | number[]) => {
    if (Array.isArray(newQuantity)) setQuantity(newQuantity);
  };
  const changePrice = (e: Event, newPrice: number | number[]) => {
    if (Array.isArray(newPrice)) setPrice(newPrice);
  };

  const setAllFilters = (
    selectInit = '',
    filtersInit = () => [],
    quantityInit = [0, 10],
    priceInit = [0, 200],
  ) => {
    setFilters(filtersInit);
    setQuantity(quantityInit);
    setPrice(priceInit);
    setSelect(selectInit);
  };
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
