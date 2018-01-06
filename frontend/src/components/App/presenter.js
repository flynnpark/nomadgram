import React from "react";
import { Route, Switch } from "react-router-dom";
import styles from "components/App/styles.scss";
import Footer from "components/Footer";

const App = props => [
    // Nav
    // Routes
    props.isLoggedIn ? <PrivateRoutes key={2} /> : <PublicRoutes key={2} />,
    <Footer key={3} />
];

const PrivateRoutes = props => (
    <Switch>
        <Route exact path="/" render={() => "Feed"} />
        <Route exact path="/explore" render={() => "Explore"} />
    </Switch>
);

const PublicRoutes = props => (
    <Switch>
        <Route exact path="/" render={() => "Login"} />
        <Route exact path="/forgot" render={() => "Password"} />
    </Switch>
)

export default App;
