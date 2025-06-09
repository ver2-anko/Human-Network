import NetWork from './components/NetWork';
import { Box, Grid, ThemeProvider, Toolbar } from '@mui/material'
import { AppBar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import { Fragment } from 'react/jsx-runtime';
import { AccountCircleRounded } from '@mui/icons-material';
import {theme} from './assets/theme'

const App = () => {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position='static' color='primary'>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} fontFamily={'Segoe UI Symbol'} color='#24140e'>
                Human Network
              </Typography>
              <AccountCircleRounded fontSize='large' />
            </Toolbar>
          </AppBar>
        </Box>
        <Grid container sx={{ mt: 10 }} justifyContent={'center'}>
          <NetWork></NetWork>
        </Grid>
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
