import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Home } from './pages/Home';
import { About } from './pages/About';

function App() {
  return (
    <div className="App">
        <Router>
            <Header />
            <main>
                <Container>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                    </Switch>
                </Container>
            </main>
        </Router>
    </div>
  );
}

export default App;
