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
        },
        primary   : {
            main : "#0d47a1",
            light: "#5472d3",
            dark : "#002171"
        },
        secondary : {
            main : "#ffa726",
            dark : "#c77800",
            light: "#ffd95b"
        }
    },
    typography: {
        fontFamily: `"Fira Code", "mono", sans-serif`
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