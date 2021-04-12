import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import FixingBugs from '../../assets/fixing_bugs.svg'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    textAlign: 'center'
  },
  image: {
    width: '200px',
    height: '200px',
  }
}));

export const Popup = (props) => {

  const {popup, handlePopup} = props

  const classes = useStyles();

  const body = (
    <div className={classes.paper}>
      <img className={classes.image} src={FixingBugs} alt="" />
      <Typography variant="h5" color="textPrimary">
        Something went wrong! Try again later.
      </Typography>
    </div>
  )
  return (
  <Modal
    className={classes.modal}
    open={popup}
    onClose={handlePopup}
    onEscapeKeyDown={handlePopup}
    aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description"
  >
    {body}
  </Modal>
  )
}