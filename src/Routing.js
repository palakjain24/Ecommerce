import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import FullPageLoader from './components/FullPageLoader/FullPageLoader';
import Login from './components/Login/Login';
import Signup from "./components/Signup/Signup";
import Cart from './components/Cart/Cart';

// Lazy load your components using React lazy
const Home = lazy(() => import('./App'));
const Product = lazy(() => import('./components/Product/Product'));
const ProductListing=lazy(() => import('./components/ProductListing/ProductListing'));

const RoutingComponent = () => {
  return (
    <Suspense fallback={<FullPageLoader />}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/product/:productId" component={Product} />
          <Route exact path="/listing/" component={ProductListing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="*" component={Home}>
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </Suspense>
  );
};

export default RoutingComponent;
