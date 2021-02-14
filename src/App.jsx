import React from 'react';
import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import { TabsPage } from './components/TabsPage';
import { HomePage } from './components/HomePage';
import { MainNavigation } from './components/MainNavigation';

const App = () => (
  <div className="App">
    <h1>Tabs with router</h1>
    <MainNavigation />

    <nav>
      <Switch>
        <Route
          path="/tabs/"
          component={TabsPage}
        />
        <Route
          path="/"
          exact
          component={HomePage}
        />
        <Redirect to="/" />
      </Switch>
    </nav>

  </div>
);

export default App;
