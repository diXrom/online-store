import { FC } from 'react';
import { Typography, Fade, Modal, Box, Backdrop } from '@mui/material';

const modal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  color: 'black',
  border: '3px solid #F3E600',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};
interface IModalInfo {
  open: boolean;
  handleClose: () => void;
}
const ModalInfo: FC<IModalInfo> = ({ open, handleClose }) => (
  <div>
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={modal}>
          <Typography id='transition-modal-title' variant='h6' component='h2'>
            Извините, корзина заполнена
          </Typography>
          <Typography id='transition-modal-description' sx={{ mt: 2 }}>
            Дальнейшие операции с корзиной недоступны, удалите некоторые товары или оформите текущий заказ
          </Typography>
        </Box>
      </Fade>
    </Modal>
  </div>
);

export default ModalInfo;
