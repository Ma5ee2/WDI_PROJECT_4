import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Register from '../auth/Register';
import Login from '../auth/Login';

import ProtectedRoute from './ProtectedRoute';

import FoodbanksIndex from '../foodbanks/FoodbanksIndex';
import FoodbanksShow from '../foodbanks/FoodbanksShow';
import FoodbanksNew from '../foodbanks/FoodbanksNew';
import FoodbanksEdit from '../foodbanks/FoodbanksEdit';

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route exact path="/" component={FoodbanksIndex} />
      <ProtectedRoute path="/foodbanks/new" component={FoodbanksNew} />
      <ProtectedRoute path="/foodbanks/:id/edit" component={FoodbanksEdit} />
      <Route path="/foodbanks/:id" component={FoodbanksShow} />
    </Switch>
  );
}

export default Routes;
