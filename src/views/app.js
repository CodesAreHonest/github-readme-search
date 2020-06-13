import React      from "react";
import history    from "./utils/history";
import { Router } from "react-router-dom";
import Routes     from "./routes";


const Application = () => {

    return (
        <Router history={history}>
            <Routes/>
        </Router>
    );
};

export default Application;