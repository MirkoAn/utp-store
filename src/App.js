import React, { useState } from 'react';
import {
  Switch,
  createMuiTheme,
  ThemeProvider,
  CssBaseline,
  makeStyles,
  Typography,
  Container
} from '@material-ui/core';

import { Home } from './Pages/Home';

export const App = () => {

  const [darkMode, setDarkMode] = useState(false);

  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      height: '100%',
    },
    container: {
      minHeight: '100vh',
      backgroundColor: darkMode? 'grey[900]' : 'grey[100]',
      paddingTop: '1rem'
    }
  }))
  
  const classes = useStyles()

  const theme = createMuiTheme({
    palette: {
      type: darkMode? 'dark' : 'light',
    },
  });
  console.log(theme)

  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container className={classes.container}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center'
            }}>
            <Typography>
              Light
            </Typography>
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <Typography>
              Dark
            </Typography>
          </div>
          <div className={classes.root}>
            <Home />
          </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
