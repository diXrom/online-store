import { FC } from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
} from '@mui/material';
import SearchField from './SearhField';
import { IBasket } from '../../types';

export interface IContorlFields {
  query: string;
  select: string;
  changeQuery: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changeSelect: (e: SelectChangeEvent) => void;
  setQuery: (value: React.SetStateAction<string>) => void;
  setBasket: (value: React.SetStateAction<IBasket[]>) => void;
  setAllFilters: (
    brandInit?: () => never[],
    sizeInit?: () => never[],
    processorInit?: () => never[],
    popularlyInit?: () => never[],
    quantityInit?: number[],
    priceInit?: number[],
    selectInit?: string,
  ) => void;
}
const ContorlFields: FC<IContorlFields> = ({
  query,
  select,
  changeQuery,
  changeSelect,
  setQuery,
  setBasket,
  setAllFilters,
}) => {
  return (
    <Stack spacing={2.5}>
      <SearchField query={query} changeQuery={changeQuery} setQuery={setQuery} />
      <FormControl fullWidth sx={{ textAlign: 'start' }}>
        <InputLabel>Сортировка</InputLabel>
        <Select value={select} label='Сортировка' onChange={changeSelect}>
          <MenuItem value={'["name",false]'}>Имя, A-Z</MenuItem>
          <MenuItem value={'["name",true]'}>Имя, Z-A</MenuItem>
          <MenuItem value={'["quantity",true]'}>Количество, по возрастанию</MenuItem>
          <MenuItem value={'["quantity",false]'}>Количество, по убыванию </MenuItem>
          <MenuItem value={'["price",true]'}>Цена, по возрастанию</MenuItem>
          <MenuItem value={'["price",false]'}>Цена, по убыванию</MenuItem>
        </Select>
      </FormControl>
      <Box>
        <ButtonGroup size='small' color='secondary' variant='text' sx={{ mb: '5px' }}>
          <Button
            onClick={() => {
              setQuery('');
              setAllFilters();
            }}
          >
            Сброс фильтров
          </Button>
          <Button
            onClick={() => {
              setAllFilters();
              setQuery('');
              setBasket([]);
            }}
          >
            Сброс всего
          </Button>
        </ButtonGroup>
      </Box>
    </Stack>
  );
};
export default ContorlFields;
