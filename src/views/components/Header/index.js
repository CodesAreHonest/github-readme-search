import React            from "react";
import AppBar           from "@material-ui/core/AppBar";
import Toolbar          from "@material-ui/core/Toolbar";
import IconButton       from "@material-ui/core/IconButton";
import Avatar           from "@material-ui/core/Avatar";
import GithubSearchLogo from "../../../assets/github-search.jpg";

import BackIcon from "@material-ui/icons/ArrowBack";
import MenuIcon from "@material-ui/icons/Menu";

import { useHistory } from "react-router";

import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    appBar    : {
        zIndex: theme.zIndex.drawer + 1,
    },
    logo      : {
        margin: "0 auto",
        cursor: "pointer",
    },
    menuButton: {
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
}));

const Header = ({ onMenuIconClick, onBackIconClick }) => {

    const classes = useStyles();
    const history = useHistory();

    const navigateToHome = () => history.replace("/");

    return (
        <AppBar position="fixed" color="default" className={classes.appBar}>
            <Toolbar variant="dense">
                {onBackIconClick && <IconButton color="default" edge="start" onClick={onBackIconClick}>
                    <BackIcon/>
                </IconButton>}
                {onMenuIconClick && <IconButton
                    aria-label="open drawer"
                    edge="start"
                    onClick={onMenuIconClick}
                    className={classes.menuButton}
                >
                    <MenuIcon/>
                </IconButton>}
                <Avatar
                    variant="rounded"
                    src={GithubSearchLogo}
                    className={classes.logo}
                    onClick={navigateToHome}
                />
            </Toolbar>
        </AppBar>
    )
};

export default Header;