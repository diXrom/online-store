import { SelectChangeEvent } from '@mui/material';
import { useState } from 'react';

const useInitialFilters = () => {
  const [quantity, setQuantity] = useState<number[]>([0, 10]);
  const [price, setPrice] = useState<number[]>([0, 200]);
  const [select, setSelect] = useState('');
  const [brand, setBrand] = useState<string[]>(() => []);
  const [size, setSize] = useState<number[]>(() => []);
  const [processor, setProcessor] = useState<string[]>(() => []);
  const [popularly, setPopularly] = useState<boolean[]>(() => []);

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
    brandInit = () => [],
    sizeInit = () => [],
    processorInit = () => [],
    popularlyInit = () => [],
    quantityInit = [0, 10],
    priceInit = [0, 200],
    selectInit = '') => {
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