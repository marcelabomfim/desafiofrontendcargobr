import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { theme } from 'theme';

import Container from 'components/Container';
import Header from 'components/Header';

import Home from 'pages/Home';
import About from 'pages/About';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ThemeProvider theme={theme}>
          <main>
            <Helmet title="Buy React.js Developers" />
            <Header />
            <Container>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
              </Switch>
            </Container>
          </main>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
