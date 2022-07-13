import { SelectChangeEvent } from '@mui/material';
import { useState } from 'react';

import { data } from '../data/data_cards';
import { ICard,IBasket } from '../types';

export function useInitialState() {
  const [cards, setCards] = useState<ICard[]>(data);
  const [basket, setBasket] = useState<IBasket[]>([]);
  const [filters, setFilters] = useState<string[]>(() => []);
  const [quantity, setQuantity] = useState<number[]>([0, 10]);
  const [price, setPrice] = useState<number[]>([0, 200]);
  const [query, setQuery] = useState('');
  const [select, setSelect] = useState('');
  const handleFilter = (e: React.MouseEvent<HTMLElement>, newFilters: string[]) => {
    setFilters(newFilters);
  };
  const changeQuantity = (e: Event, newQuantity: number | number[]) => {
    if (Array.isArray(newQuantity)) setQuantity(newQuantity);
  };
  const changePrice = (e: Event, newPrice: number | number[]) => {
    if (Array.isArray(newPrice)) setPrice(newPrice);
  };
  const changeQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  const changeSelect = (e: SelectChangeEvent) => {
    setSelect(e.target.value);
  };
  return {
    cards,
    basket,
    filters,
    quantity,
    price,
    query,
    select,
    handleFilter,
    changeQuantity,
    changePrice,
    changeQuery,
    changeSelect,
    setCards,
    setQuery,
    setBasket,
  };
}