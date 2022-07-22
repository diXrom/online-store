import { FC, memo } from 'react';
import { Chip, Divider, Grid, Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

export interface IFiltersByValue {
  filters: string[];
  changeFilters: (e: React.MouseEvent<HTMLElement>, newFilters: string[]) => void;
}

const FiltersByValue: FC<IFiltersByValue> = ({ filters, changeFilters }) => (
  <Stack spacing={1} sx={{ width: '100%' }}>
    <Typography variant='subtitle1' color='black' component='h4' sx={{ flexGrow: 1 }}>
      Фильтры по значению
    </Typography>
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6} md={3} lg={6}>
        <Divider>
          <Chip label='Производитель' color='info' />
        </Divider>
        <ToggleButtonGroup value={filters} onChange={changeFilters} sx={{ mt: 1 }}>
          <ToggleButton value={'["brand","GIGABYTE"]'} color='secondary' sx={{ p: '5px' }}>
            GIGABYTE
          </ToggleButton>
          <ToggleButton value={'["brand","MSI"]'} color='secondary' sx={{ p: '5px' }}>
            MSI
          </ToggleButton>
          <ToggleButton value={'["brand","Palit"]'} color='secondary' sx={{ p: '5px' }}>
            Palit
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={6}>
        <Divider>
          <Chip label='Количество памяти' color='info' />
        </Divider>
        <ToggleButtonGroup value={filters} onChange={changeFilters} sx={{ mt: 1 }}>
          <ToggleButton value={'["size",8]'} color='secondary' sx={{ p: '5px 15px' }}>
            8
          </ToggleButton>
          <ToggleButton value={'["size",12]'} color='secondary' sx={{ p: '5px 15px' }}>
            12
          </ToggleButton>
          <ToggleButton value={'["size",16]'} color='secondary' sx={{ p: '5px 15px' }}>
            16
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={6}>
        <Divider>
          <Chip label='Производитель GPU' color='info' />
        </Divider>
        <ToggleButtonGroup value={filters} onChange={changeFilters} sx={{ mt: 1 }}>
          <ToggleButton value={'["processor","AMD"]'} color='secondary' sx={{ p: '5px' }}>
            AMD
          </ToggleButton>
          <ToggleButton value={'["processor","NVIDIA"]'} color='secondary' sx={{ p: '5px' }}>
            NVIDIA
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={6}>
        <Divider>
          <Chip label='Только популярные' color='info' />
        </Divider>
        <ToggleButtonGroup value={filters} onChange={changeFilters} sx={{ mt: 1 }}>
          <ToggleButton value={'["popularly",true]'} color='secondary' sx={{ p: '5px' }}>
            <CheckIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
    </Grid>
  </Stack>
);

export default memo(FiltersByValue);
