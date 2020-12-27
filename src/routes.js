import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import HeroDetails from './pages/HeroDetails';
import NotFound from './pages/NotFound';

const Routes = () => {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/hero/:id" component={HeroDetails} />
        <Route component={NotFound} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
