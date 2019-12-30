import React from 'react';
import './App.css';
import GitRepoList from '../GitRepoList/GitRepoList';
import LatestBlogList from '../LatestBlogList/LatestBlogList';
import Typography from '@material-ui/core/Typography';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container fixed>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h1" align="center">
                Mattyace
              </Typography>
              <Typography variant="h3" align="center" gutterBottom>
                Github Page
              </Typography>
              <Button variant="contained" color="primary" href="https://matthewaisthorpe.com.au/">
                View my Portfolio Site <ChevronRight />
              </Button>
            </Grid>
            <Grid item xs={12}>
              <GitRepoList />
            </Grid>
            <Grid item xs={12}>
              <LatestBlogList />
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="caption">
                    This page was created using react and material ui.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
