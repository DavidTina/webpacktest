import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import asyncComponent from "./components/AsyncComponent";
import {RouteWithSubRoutes, Tacos} from "./components/Tacos";

const AsyncBus = asyncComponent(() => import("./components/Bus"));
const AsyncCart = asyncComponent(() => import("./components/Cart"));
const AsyncSandwiches = asyncComponent(() => import("./components/Sandwiches"));

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

// Our route config is just an array of logical "routes"
// with `path` and `component` props, ordered the same
// way you'd do inside a `<Switch>`.
const routes = [
    {
        path: "/sandwiches",
        component: AsyncSandwiches
    },
    {
        path: "/tacos",
        component: Tacos,
        routes: [
            {
                path: "/tacos/bus",
                component: AsyncBus
            },
            {
                path: "/tacos/cart",
                component: AsyncCart
            }
        ]
    }
];

function RouteConfigExample() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/tacos">Tacos</Link>
                    </li>
                    <li>
                        <Link to="/sandwiches">Sandwiches</Link>
                    </li>
                </ul>

                <Switch>
                    {routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route} />
                    ))}
                </Switch>
            </div>
        </Router>
    );
}

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.


export default RouteConfigExample;
