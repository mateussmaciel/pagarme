import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard/index';

function Routes(){
  return (
  <Switch>
    <Route path="/" component={Dashboard} exact/>
  </Switch>
  );
}


export default Routes;
