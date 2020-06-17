import React, { PureComponent, Fragment } from "react";
import { Route, Switch }                  from "react-router";
import NotFoundPage                       from "../presentations/404";
import Home                               from "../presentations/Home";
import PublicRoutes                       from "./public";

class Routes extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            publicRoutes: []
        }
    }

    componentDidMount() {
        this.renderPublicRoutes();
    }

    renderPublicRoutes = () => {
        let rootRoutes = Array.prototype.concat(PublicRoutes);

        const publicRoutes = rootRoutes.map((route, index) => {
            const { exact, path, component, strict } = route;
            return (
                <Route
                    exact={exact}
                    key={index}
                    path={path}
                    component={component}
                    strict={strict}
                />
            )
        });

        this.setState({ publicRoutes });
    };

    render() {
        const { publicRoutes } = this.state;

        // redirect to specific path based on authorization state
        const rootPathRedirection = publicRoutes.length !== 0 &&
            <Route exact path="/" render={() => <Home/>}/>;

        // redirect to 404 if round not found.
        const notFoundRedirection = publicRoutes.count !== 0 &&
            <Route component={NotFoundPage}/>;

        return (
            <Fragment>
                <Switch>
                    {publicRoutes}
                    {rootPathRedirection}
                    {notFoundRedirection}
                </Switch>
            </Fragment>
        )
    }
}

export default Routes;