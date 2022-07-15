import { SelectChangeEvent } from '@mui/material';

import useLocalStorage from './useLocalStorage';

const useInitialFilters = () => {
  const [quantity, setQuantity] = useLocalStorage<number[]>([0, 10], 'quantity');
  const [price, setPrice] = useLocalStorage<number[]>([0, 200], 'price');
  const [select, setSelect] = useLocalStorage('', 'select');
  const [brand, setBrand] = useLocalStorage<string[]>([], 'brand');
  const [size, setSize] = useLocalStorage<number[]>([], 'size');
  const [processor, setProcessor] = useLocalStorage<string[]>([], 'processor');
  const [popularly, setPopularly] = useLocalStorage<boolean[]>([], 'popularly');

  const changeBrand = (e: React.MouseEvent<HTMLElement>, newBrand: string[]) => {
    setBrand(newBrand);
  };
  const changeSize = (e: React.MouseEvent<HTMLElement>, newSize: number[]) => {
    setSize(newSize);
  };
  const changeProcessor = (e: React.MouseEvent<HTMLElement>, newProcessor: string[]) => {
    setProcessor(newProcessor);
  };
  const changePopularly = (e: React.MouseEvent<HTMLElement>, newPopularly: boolean[]) => {
    setPopularly(newPopularly);
  };
  const changeQuantity = (e: Event, newQuantity: number | number[]) => {
    if (Array.isArray(newQuantity)) setQuantity(newQuantity);
  };
  const changePrice = (e: Event, newPrice: number | number[]) => {
    if (Array.isArray(newPrice)) setPrice(newPrice);
  };
  const changeSelect = (e: SelectChangeEvent) => {
    setSelect(e.target.value);
  };
  const setAllFilters = (
    selectInit = '',
    brandInit = () => [],
    sizeInit = () => [],
    processorInit = () => [],
    popularlyInit = () => [],
    quantityInit = [0, 10],
    priceInit = [0, 200],
  ) => {
    setBrand(brandInit);
    setSize(sizeInit);
    setProcessor(processorInit);
    setPopularly(popularlyInit);
    setQuantity(quantityInit);
    setPrice(priceInit);
    setSelect(selectInit);
  };
  return {
    brand,
    size,
    processor,
    popularly,
    quantity,
    price,
    select,
    changeBrand,
    changeSize,
    changeProcessor,
    changePopularly,
    changeQuantity,
    changePrice,
    changeSelect,
    setAllFilters,
  };
};
export default useInitialFilters;
