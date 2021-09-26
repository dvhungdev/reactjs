import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import NotFound from '../../components/pages/NotFound/NotFound';
import ProductMainPage from './pages/ProductMainPage/ProductMainPage';
import ProductSearchPage from './pages/ProductSearchPage/ProductSearchPage';

function Product(props) {
    const match = useRouteMatch();

    return (
        <Switch>
            <Route exact path={match.url} component={ProductMainPage} />
            <Route exact path={`${match.url}/search`} component={ProductSearchPage} />
            <Route component={NotFound} />
        </Switch>
    );
}

Product.propTypes = {};

export default Product;
