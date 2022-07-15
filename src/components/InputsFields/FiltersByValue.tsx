import { FC, memo } from 'react';
import { Chip, Divider, Grid, Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

export interface IFiltersByValue {
  brand: string[];
  size: number[];
  processor: string[];
  popularly: boolean[];
  changeBrand: (e: React.MouseEvent<HTMLElement>, newFilters: string[]) => void;
  changeSize: (e: React.MouseEvent<HTMLElement>, newFilters: number[]) => void;
  changeProcessor: (e: React.MouseEvent<HTMLElement>, newFilters: string[]) => void;
  changePopularly: (e: React.MouseEvent<HTMLElement>, newFilters: boolean[]) => void;
}

const FiltersByValue: FC<IFiltersByValue> = ({
  brand,
  size,
  processor,
  popularly,
  changeBrand,
  changeSize,
  changeProcessor,
  changePopularly,
}) => (
  <Stack spacing={1}>
    <Typography variant='subtitle1' color='black' component='h4' sx={{ flexGrow: 1 }}>
      Фильтры по значению
    </Typography>
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6} md={3} lg={6}>
        <Divider>
          <Chip label='Производитель' color='info' />
        </Divider>
        <ToggleButtonGroup value={brand} onChange={changeBrand} sx={{ mt: 1 }}>
          <ToggleButton value='GIGABYTE' color='secondary' sx={{ p: '5px' }}>
            GIGABYTE
          </ToggleButton>
          <ToggleButton value='MSI' color='secondary' sx={{ p: '5px' }}>
            MSI
          </ToggleButton>
          <ToggleButton value='Palit' color='secondary' sx={{ p: '5px' }}>
            Palit
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={6}>
        <Divider>
          <Chip label='Количество памяти' color='info' />
        </Divider>
        <ToggleButtonGroup value={size} onChange={changeSize} sx={{ mt: 1 }}>
          <ToggleButton value={8} color='secondary' sx={{ p: '5px 15px' }}>
            8
          </ToggleButton>
          <ToggleButton value={12} color='secondary' sx={{ p: '5px 15px' }}>
            12
          </ToggleButton>
          <ToggleButton value={16} color='secondary' sx={{ p: '5px 15px' }}>
            16
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={6}>
        <Divider>
          <Chip label='Производитель GPU' color='info' />
        </Divider>
        <ToggleButtonGroup value={processor} onChange={changeProcessor} sx={{ mt: 1 }}>
          <ToggleButton value='AMD' color='secondary' sx={{ p: '5px' }}>
            AMD
          </ToggleButton>
          <ToggleButton value='NVIDIA' color='secondary' sx={{ p: '5px' }}>
            NVIDIA
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={6}>
        <Divider>
          <Chip label='Только популярные' color='info' />
        </Divider>
        <ToggleButtonGroup value={popularly} onChange={changePopularly} sx={{ mt: 1 }}>
          <ToggleButton value={true} color='secondary' sx={{ p: '5px' }}>
            <CheckIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
    </Grid>
  </Stack>
);

export default memo(FiltersByValue);
