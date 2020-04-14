import React, { useState } from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import GitRepoList from '../GitRepoList/GitRepoList';
import LatestBlogList from '../LatestBlogList/LatestBlogList';
import Menu from '../Menu/Menu';


const App = () => {
  const [theme, setTheme] = useState({
    palette: {
      type: "light"
    }
  });

  const toggleDarkTheme = () => {
    let newPaletteType = theme.palette.type === "light" ? "dark" : "light";
    setTheme({
      palette: {
        type: newPaletteType
      }
    });
  };

  const muiTheme = createMuiTheme(theme);

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Menu onToggleDark={toggleDarkTheme} />
      <Container fixed>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h1" align="center">
              Welcome to my Github Page!
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <LatestBlogList />
          </Grid>
          <Grid item xs={12}>
            <GitRepoList />
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="caption">
                  This page was by me created using react and material ui.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
