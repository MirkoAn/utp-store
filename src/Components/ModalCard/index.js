import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles((theme) => ({

  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflowY: 'auto'
    
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export const ModalCard = (props) => {

  const classes = useStyles();

  //Obtaining the values required for the Modal from props

  const {open, handleOpenClose, children } = props

  return (
  <Modal
    className={classes.modal}
    open={open}
    onClose={handleOpenClose}
    onEscapeKeyDown={handleOpenClose}
    aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description"
  >
      {children}
  </Modal>
  )
}