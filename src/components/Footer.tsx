import { Toolbar, Typography, Link, Container } from '@mui/material';
import { memo } from 'react';

const Footer = () => (
  <Container maxWidth='xl'>
    <Toolbar sx={{ mt: 2, pt: 1, pb: 1, background: '#000000', borderRadius: 1 }}>
      <Link href='https://rs.school/' target='_blank' rel='noopener' underline='none'>
        <img src='./images/Logo RSS.svg' loading='lazy' alt='' />
      </Link>
      <Typography variant='h6' component='div' sx={{ flexGrow: 1, ml: 2, color: '#F3E600' }}>
        2022
      </Typography>
      <Link href='https://github.com/diXrom' target='_blank' rel='noopener' underline='none'>
        <Typography variant='h6' component='div' sx={{ color: '#F3E600' }}>
          GitHub
        </Typography>
      </Link>
    </Toolbar>
  </Container>
);

export default memo(Footer);
