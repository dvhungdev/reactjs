import { Suspense } from 'react';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import NotFound from './components/pages/NotFound/NotFound';
import HomePage from './features/Home/pages/HomePage/HomePage';
import Product from './features/Product';

function App() {
    return (
        <div className='shope-app'>
            <Suspense fallback={<div>Loading ...</div>}>
                <BrowserRouter>
                    <ul>
                        <li>
                            <Link to='/home'>Go to Home Page</Link>
                        </li>
                        <li>
                            <Link to='/product'>Go to Product Main Page</Link>
                        </li>
                    </ul>

                    <Switch>
                        <Redirect exact from='/' to='/home' />

                        <Route path='/home' component={HomePage} />
                        <Route path='/product' component={Product} />
                        <Route component={NotFound} />
                    </Switch>
                </BrowserRouter>
            </Suspense>
        </div>
    );
}

export default App;
