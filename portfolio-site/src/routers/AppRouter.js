//Modules
import React from 'react';
import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom';
//Components
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import Home from '../components/Home'
import ContactPage from '../components/ContactPage';
import PortfolioHomePage from '../components/PortfolioHomePage';
import PortfolioItem from '../components/PortfolioItem';

const AppRouter = () => (
  <BrowserRouter>
  <div>
    <Header />
    <Switch>
      <Route path="/" component={Home} exact={true} />
      <Route path="/portfolio/:id" component={PortfolioItem} />
      <Route path="/portfolio" component={PortfolioHomePage} exact={true} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>
</BrowserRouter>
);

//Export
export default AppRouter;