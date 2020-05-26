import React from "react";
import {Route, Switch} from "react-router";
import {Link} from "react-router-dom";

export function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes}/>
            )}
        />
    );
}



export function Tacos({routes}) {
    return (
        <div>
            <h2>Tacos</h2>
            <ul>
                <li>
                    <Link to="/tacos/bus">Bus</Link>
                </li>
                <li>
                    <Link to="/tacos/cart">Cart</Link>
                </li>
            </ul>

            <Switch>
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </Switch>
        </div>
    );
}