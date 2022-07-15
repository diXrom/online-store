import { FC } from 'react';
import { IconButton, TextField } from '@mui/material';
import Close from '@mui/icons-material/Close';

export interface ISearchField {
  query: string;
  changeQuery: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setQuery: (value: React.SetStateAction<string>) => void;
}

const SearchField: FC<ISearchField> = ({ query, changeQuery, setQuery }) => {
  const closeBtn = {
    endAdornment: (
      <IconButton onClick={() => setQuery('')}>
        <Close fontSize='small' />
      </IconButton>
    ),
  };
  return (
    <TextField
      sx={{ mt: '20px' }}
      autoComplete='off'
      autoFocus
      fullWidth
      label='Поиск'
      value={query}
      onChange={changeQuery}
      InputProps={query ? closeBtn : undefined}
    />
  );
};
export default SearchField;
