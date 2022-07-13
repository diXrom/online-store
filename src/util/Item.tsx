import { Paper,styled } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#F7F7F7',
  padding: theme.spacing(1),
  textAlign: 'center',
  color: 'white',
  border: '2px solid #000',
}));
export default Item;