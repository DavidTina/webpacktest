import React from "react";
import {Route, Switch, Router} from "react-router";
import asyncComponent from "../components/AsyncComponent";

const AsynA = asyncComponent((() => import("../components/Cart")));
const AsynB = asyncComponent((() => import("../components/Bus")));

export default () =>
    <Switch>
        <Route path="/" component={props => <div>{props.children}</div>}>
            <Route path="/a"  component={props => <AsynA/>}/>
            <Route path="/b"  component={props => <AsynB/>}/>
        </Route>
    </Switch>
