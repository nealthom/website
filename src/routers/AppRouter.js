import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../components/Home';
import Feed from '../components/Feed';
import Terms from '../components/Home';
import NotFound from '../components/NotFound';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/feed" component={Feed} />
          <Route path="/terms" component={Terms} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
