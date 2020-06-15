import React, { useState } from "react";
import { useHistory }      from "react-router"
import Toolbar             from "@material-ui/core/Toolbar";
import makeStyles          from "@material-ui/core/styles/makeStyles"
import Header              from "../../components/Header";
import Sidebar             from "../../components/Sidebar";

const useStyles = makeStyles(theme => {
    return {
        root   : {
            display: 'flex'
        },
        content: {
            padding: `0 ${theme.spacing(1)}px`
        }
    }
});

const GithubUserProfile = () => {

    const classes = useStyles();
    const history = useHistory();

    const goBack = () => history.push("/");

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

    return (
        <div className={classes.root}>
            <Header
                onMenuIconClick={handleDrawerToggle}
                onBackIconClick={goBack}
            />
            <Sidebar
                open={mobileOpen}
                onDrawerClose={handleDrawerToggle}
            />
            <main className={classes.content}>
                <Toolbar/>
                main content
            </main>
        </div>
    )
};

export default GithubUserProfile;