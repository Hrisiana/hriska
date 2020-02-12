import React from 'react';
import Watches from './components/Watches';
import Header from './components/header/Header';
import Home from './pages/Начало';
import Brand from './pages/Марки';
import Промоции from './pages/Промоции';
import Контакти from './pages/Контакти';
import  Информация  from './pages/Информоция';

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./redux/reducers";
import thunk from 'redux-thunk';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

const store = createStore(reducers, applyMiddleware(thunk));




const Layout = props => (
    <>
        <Header/>
        <div className="container mt-5">
            {props.children}
        </div>
    </>
)

const routes = [
    {
        path: '/Начало',
        exact: true,
        main: () => <Layout>
            <Home/>
        </Layout>
    },
    {
        path: '/Марки',
        exact: false,
        main: () => <Layout>
            <Brand/>
        </Layout>
    },
    {
        path: '/Промоции',
        exact: false,
        main: () => <Layout>
            <Promotions/>
        </Layout>
    },
    {
        path: '/Контакти',
        exact: true,
        main: () => <Layout>
            <Contact/>
        </Layout>
    },
    {
        path: '/Информация/:id',
        exact: false,
        main: () => <Layout>
            <Information/>
        </Layout>
    }

]

const getRoutes = () => {
    return routes.map((route, index) => {
        return <Route
            exact={route.exact} 
            key={index}
            path={route.path}>
            {route.main}
        </Route>
    })
}

function App() {
    return <Provider store={store}>
        <Router>
            <Switch>
                {getRoutes()}
            </Switch>
        </Router>
    </Provider>
}

export default App;



