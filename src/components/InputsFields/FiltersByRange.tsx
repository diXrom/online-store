import { FC, memo } from 'react';
import { Box, Chip, Divider, Stack, Slider, Typography } from '@mui/material';

export interface IFiltersByRange {
  quantity: number[];
  price: number[];
  changeQuantity: (e: Event, newQuantity: number | number[]) => void;
  changePrice: (e: Event, newQuantity: number | number[]) => void;
}

const FiltersByRange: FC<IFiltersByRange> = ({ quantity, price, changeQuantity, changePrice }) => (
  <Stack spacing={2} sx={{ width: '100%' }}>
    <Typography variant='subtitle1' color='black' component='h4' sx={{ flexGrow: 1 }}>
      Фильтры по диапазону
    </Typography>
    <Box sx={{ flexGrow: 1 }}>
      <Divider>
        <Chip label='Количество на складе, шт.' color='info' />
      </Divider>
      <Box sx={{ flexGrow: 1, margin: 'auto', p: '5px' }}>
        <Stack direction='row' spacing={2} sx={{ mt: '3.5px' }}>
          <Typography color='black' sx={{ width: '30px' }}>
            {quantity[0]}
          </Typography>
          <Slider
            max={10}
            value={quantity}
            onChange={changeQuantity}
            valueLabelDisplay='off'
            color='secondary'
          />
          <Typography color='black' sx={{ width: '30px' }}>
            {quantity[1]}
          </Typography>
        </Stack>
      </Box>
    </Box>
    <Box sx={{ flexGrow: 1 }}>
      <Divider>
        <Chip label='Цена товара, ₽' color='info' />
      </Divider>
      <Box sx={{ flexGrow: 1, margin: 'auto', p: '5px' }}>
        <Stack direction='row' spacing={2} sx={{ mt: '10px' }}>
          <Typography color='black' sx={{ width: '70px' }}>{`${price[0]}К`}</Typography>
          <Slider max={200} value={price} onChange={changePrice} valueLabelDisplay='off' color='secondary' />
          <Typography color='black' sx={{ width: '70px' }}>{`${price[1]}К`}</Typography>
        </Stack>
      </Box>
    </Box>
  </Stack>
);

export default memo(FiltersByRange);
