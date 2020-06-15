import React                             from "react";
import history                           from "./utils/history";
import { Router }                        from "react-router-dom";
import Routes                            from "./routes";
import { Provider }                      from "react-redux";
import configureStore                    from "../configureStore";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import createMuiTheme                    from "@material-ui/core/styles/createMuiTheme";

const store = configureStore();

// configure material ui palletes
const theme = createMuiTheme({
    palette: {
        type      : "dark",
        background: {
            // default: "#1B1F23"
        }
    }
});

const Application = () => {
    return (
        <Provider store={store}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline/>
                <Router history={history}>
                    <Routes/>
                </Router>
            </MuiThemeProvider>
        </Provider>
    );
};

export default Application;