import { useEffect, useState } from 'react';
import { IBasket } from '../types';
import { getAmount } from '../util/helperFunctions';

const useShowModal = (basket: IBasket[]) => {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    getAmount(basket, 'amount') === 20 ? setOpen(true) : setOpen(false);
  }, [basket]);
  return { open, handleClose };
};
export default useShowModal;