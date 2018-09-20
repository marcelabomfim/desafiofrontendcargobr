import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { theme } from 'theme';

import Container from 'components/ui/Container';
import Header from 'components/Header';
import Footer from 'components/Footer';

import Home from 'pages/Home';
import About from 'pages/About';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ThemeProvider theme={theme}>
          <Container>
            <Helmet title="Buy React.js Developers" />
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
            </Switch>
            <Footer />
          </Container>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
