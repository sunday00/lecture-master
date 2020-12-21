import React, { useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  createMuiTheme,
  Grid,
  Input,
  Paper,
  Switch,
  ThemeProvider,
  Typography,
} from '@material-ui/core';

function App() {
  const [themeType, setThemeType] = useState('light');

  const theme = createMuiTheme({
    palette: {
      type: themeType,
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Paper elevation={24} square style={{ marginBottom: '40px' }}>
          <Typography variant="h5">This is text in paper</Typography>
        </Paper>
        <Paper elevation={10} square style={{ marginBottom: '40px' }}>
          <Typography variant="h5">This is text in paper</Typography>
        </Paper>
        <Paper elevation={1} square style={{ marginBottom: '40px' }}>
          <Grid container direction="column">
            <Typography variant="h5">This is text in paper</Typography>
            <Input></Input>
            <Card>
              <CardContent>
                <Typography variant="h3">card</Typography>
                <Typography variant="body2" component="p">
                  this is card body. Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Sint reprehenderit inventore aliquid veniam
                  quasi facilis ipsum fugit vero illo dignissimos possimus,
                  sequi blanditiis maxime ullam, rerum, ipsam commodi eum at?
                </Typography>
              </CardContent>
            </Card>
            <Button variant="contained" color="primary">
              Button 1
            </Button>
            <Button variant="contained" color="secondary">
              Button 2
            </Button>
            <Switch
              checked={themeType === 'dark'}
              onChange={() =>
                setThemeType(themeType === 'dark' ? 'light' : 'dark')
              }
            ></Switch>
          </Grid>
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
