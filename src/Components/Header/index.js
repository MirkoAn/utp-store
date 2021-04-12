import React, {useState} from 'react';

import Logo from '../../assets/utp.svg';
import ShoppingCartIcon from '../../assets/shoppingcart.svg';
import {
  Box,
  Grid,
  Typography
} from '@material-ui/core';

export const Header = () => {

  const [count, setCount] = useState(0)

  const handleCount = () => {
    setCount(count + 1)
  }
  
  return (
    <Grid
      container
      direction="row"
      justify="space-around"
      alignItems="center"
    >
      <div>
        <img src={Logo} alt="" />
      </div>
      <Box display="flex">
        <Typography variant="h5">
          {count}
        </Typography>
        <img src={ShoppingCartIcon} alt=""/>
      </Box>
    </Grid>
   ) 
}