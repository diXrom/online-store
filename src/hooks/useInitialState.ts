import { SelectChangeEvent } from '@mui/material';
import { useState } from 'react';

import { ICard, IBasket } from '../types';

export function useInitialState() {
  const [cards, setCards] = useState<ICard[]>([]);
  const [basket, setBasket] = useState<IBasket[]>([]);
  const [quantity, setQuantity] = useState<number[]>([0, 10]);
  const [price, setPrice] = useState<number[]>([0, 200]);
  const [select, setSelect] = useState('');
  const [brand, setBrand] = useState<string[]>(() => []);
  const [size, setSize] = useState<number[]>(() => []);
  const [processor, setProcessor] = useState<string[]>(() => []);
  const [popularly, setPopularly] = useState<boolean[]>(() => []);
  const filters = { brand, size, processor, popularly };

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
  return {
    brand,
    size,
    processor,
    popularly,
    cards,
    basket,
    filters,
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
    setCards,
    setBasket,
  };
}