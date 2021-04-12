import React, { useState, useEffect } from 'react';
import { CollectionItem } from '../CollectionItem'
import SHOP_DATA from '../../ShopData/ShopData'
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const flexgap = makeStyles({
  gap: {
    gap: 25
  }
})


export const CollectionList = () => {

  const styles = flexgap()

  //Initializing the collections data state

  const [collections, setCollections] = useState([])

  //Getting the data and storing in collections state

  useEffect(() => {
    setCollections(SHOP_DATA)
  }, [])

  return (
    <Box
      className={styles.gap}
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      padding="40px"
    >
      {
        collections.map(({id, ...collection}) => {
          return (
            <li key={id}>
              <CollectionItem {...collection} />
            </li>
          )
        })
      }
    </Box>
  )
}