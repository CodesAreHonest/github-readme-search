import React                             from "react";
import { BrowserRouter as Router }       from "react-router-dom";
import Routes                            from "./routes";
import { Provider }                      from "react-redux";
import configureStore                    from "../configureStore";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import createMuiTheme                    from "@material-ui/core/styles/createMuiTheme";

const store = configureStore();

// configure material ui palletes
const theme = createMuiTheme({
    palette   : {
        type      : "dark",
        background: {
            default: "#000000"
        },
        action    : {
            hover: "#2b2b2b"
        }
    },
    typography: {
        fontFamily: `"Fira", "mono", sans-serif`
    }
});

const Application = () => {
    return (
        <Provider store={store}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline/>
                <Router>
                    <Routes/>
                </Router>
            </MuiThemeProvider>
        </Provider>
    );
};

export default Application;