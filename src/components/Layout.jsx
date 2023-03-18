import React, {useContext} from 'react';
import { Outlet } from 'react-router-dom';
import TempHeader from './TempHeader';
import Container from '@mui/material/Container';
import Snackbar  from '@mui/material/Snackbar';
import { UIContext } from './contexts/UI.context';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function Layout() {
  const {open, handleClose, message} = useContext(UIContext);

  const action = (
    <React.Fragment>
      
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <>
    <header>
        <h1>Cars App</h1>
        <TempHeader/>
    </header>
    <main>
    <Container maxWidth="lg"> 
    <Outlet/>
    </Container>
       
    </main>
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message={message}
      action={action}
    />
    </>
  )
}

export default Layout