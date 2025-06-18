import NetWork from './components/NetWork';
import CardList from './components/CardList';
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, ThemeProvider, Toolbar } from '@mui/material'
import { AppBar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography'
import { Fragment } from 'react/jsx-runtime';
import { AccountCircleRounded } from '@mui/icons-material';
import { theme } from './assets/theme'

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
              <Typography variant="h5" component="div" sx={{ mr: 7 }} fontFamily={'Segoe UI Symbol'} color='#24140e'>
                人員調整システム
              </Typography>
              <Typography variant='h5' sx={{ mr: 7, borderBottom: '1px solid green', }} fontFamily={'Segoe UI Symbol'} color='#24140e'>
                メインメニュー
              </Typography>
              <Typography variant="h5" component="div" sx={{ mr: 7 }} fontFamily={'Segoe UI Symbol'} color='#24140e'>
                案件一覧
              </Typography>
              <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} fontFamily={'Segoe UI Symbol'} color='#24140e'>
                案件作成
              </Typography>
              <AccountCircleRounded fontSize='large' />
            </Toolbar>
          </AppBar>
        </Box>
        <Grid container sx={{ mt: 5 }} justifyContent={'center'}>
          <FormControl variant="standard" sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">案件</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              label="案件"
            >
              <MenuItem value={'xxx'}>xxx仕様書作成支援システム</MenuItem>
              <MenuItem value={'yyy'}>yyyダッシュボード</MenuItem>
              <MenuItem value={'zzz'}>zzz日報管理システム</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid container sx={{ mt: 3 }} justifyContent={'center'}>
          <CardList
            title="PM：×1"
            items={['要件定義経験', '顧客ヒアリング', 'ストレス耐性']}
          />
          <CardList
            title="PL：×1"
            items={['要件定義経験', '成果物レビュー', '育成経験']}
          />
          <CardList
            title="SE：×2"
            items={['工数見積', '進捗管理', 'ドキュメント作成']}
          />
          <CardList
            title="PG：×2"
            items={['工数見積', '進捗管理', 'ドキュメント作成']}
          />
        </Grid>
        <Grid container sx={{ mt: 3 }} justifyContent="center">
          <Grid>
            <Button variant="contained" sx={{ mr:8, minWidth: 150, fontWeight: 'bold', fontFamily: 'Segoe UI Symbol', boxShadow: 3 }}>Create Team</Button>
          </Grid>
          <Grid>
            <Button variant="contained" sx={{ minWidth: 150, fontWeight: 'bold', fontFamily: 'Segoe UI Symbol', boxShadow: 3 }}>Snap Shot</Button>
          </Grid>
        </Grid>
        <Grid container sx={{ mt: 3 }} justifyContent={'center'}>
          <Grid>
            <NetWork></NetWork>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
