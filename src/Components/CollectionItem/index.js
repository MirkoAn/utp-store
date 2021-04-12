import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ModalCard } from '../ModalCard';
import { Box, Grid } from '@material-ui/core';
import { Popup } from '../Popup';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    color: theme.palette.primary.contrastText
  },
  media: {
    height: 180,
  },
}));

export const CollectionItem = (collection) => {

  const classes = useStyles();

  //Getting the values from the collection data to dynamically display

  const {name, imageUrl, description, price, extraInfo} = collection

  //Initialize states for modals to false

  const [modal, setModal] = useState(false);

  const [popup, setPopup] = useState(false);


  // Handlers methods for the modals

  const handleOpenClose = () => {
    setModal(!modal);
  }

  const handlePopup = () => {
    setPopup(!popup);
  }

  return (
    <>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imageUrl}
          title={name}
        />
        <CardContent>
          <Typography align="left" color="textPrimary" gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography align="left" gutterBottom color="textSecondary" variant="body2" component="p">
            {description}
          </Typography>
          <Typography align="right" color="textPrimary" gutterBottom variant="h5" component="h2">
            S/.{price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          onClick={handleOpenClose}
          size="small"
          color="secondary">
          PREVIEW
        </Button>
        <Button size="small" color="primary.main">
          ADD
        </Button>
      </CardActions>
        
      {/* When Preview Button is Clicked, A card Modal with extra info is displayed */}

      </Card>
      {
        modal &&
          <ModalCard
            open={modal}
            handleOpenClose={handleOpenClose}
          >
            <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={imageUrl}
                title={name}
              />
              <CardContent>
                <Typography align="left" color="textPrimary" gutterBottom variant="h5" component="h2">
                  {name}
                </Typography>
                <Typography align="left" gutterBottom variant="body2" color="textSecondary" component="p">
                  {description}
                </Typography>
                <Box mt="15px" mb="10px">
                  <Typography align="left" color="textPrimary" gutterBottom variant="h5" component="h2">
                  Extra Information
                  </Typography>
                </Box>
                <Typography align="left" gutterBottom variant="body2" color="textSecondary" component="p">
                  {extraInfo}
                </Typography>
                <Typography align="right" color="textPrimary" gutterBottom variant="h5" component="h2">
                  S/.{price}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Grid container justify="center">
                <Button onClick={handlePopup} color="textPrimary" size="medium">
                  ADD
                </Button>
              </Grid>
            </CardActions>
          </Card>
        </ModalCard>
      }

      {/* When add button is clicked an error message modal is displayed  */}

      {
      popup &&
        <Popup popup={popup} handlePopup={handlePopup} />
      }
    </>
  );
}