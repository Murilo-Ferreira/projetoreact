import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Login from '../pages/login';
import Dashboard from '../pages/dashboard';
import ProductInformation from '../pages/product-information';
import TestPlans from '../pages/test-plans';
import TestCases from '../pages/test-cases';
import Integrations from '../pages/integrations';

// import { Container } from './styles';

function router() {
  return (
      <Router>
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/product-information" exact component={ProductInformation} />
          <Route path="/test-plans" exact component={TestPlans} />
          <Route path="/test-cases" exact component={TestCases} />
          <Route path="/integrations" exact component={Integrations} />
      </Router>
  );
}

export default router;