import React from "react";

import Button     from "@material-ui/core/Button";
import Paper      from "@material-ui/core/Paper";
import CloseIcon  from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    searchBox      : {
        backgroundColor               : "#dfe1e5",
        borderRadius                  : "18px",
        display                       : "flex",
        width                         : "50%",
        position                      : "relative",
        margin                        : "0 auto",
        padding                       : "6px 11px",
        "&:hover"                     : {
            boxShadow: "1px 0px 6px 10px #424242",
        },
        [theme.breakpoints.down('sm')]: {
            width: "50%"
        },
        [theme.breakpoints.down('sm')]: {
            width: "75%"
        },
        [theme.breakpoints.down('xs')]: {
            width: "100%"
        },
    },
    searchBoxActive: {},
    textField      : {
        backgroundColor               : "transparent",
        padding                       : "7px",
        outline                       : "none",
        border                        : "none",
        color                         : "rgba(0,0,0,0.93)",
        width                         : "80%",
        fontSize                      : theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
            width: "65%"
        },
    },
    searchButton   : {
        border      : "none",
        borderRadius: theme.spacing(2),
        padding     : "7px",
        position    : "absolute",
        right       : "4px",
        top         : "3px",
        cursor      : "pointer",
        outline     : "none"
    },
    clearButton    : {
        backgroundColor               : "transparent",
        color                         : theme.palette.primary.main,
        padding                       : "4px 0",
        position                      : "absolute",
        right                         : "58px",
        [theme.breakpoints.down('xs')]: {
            right: "53px"
        },
    }
}));


const GithubUserSearchContainer = () => {

    const classes = useStyles();

    return (
        <Paper className={classes.searchBox}>
            <input type="text"
                   name="searchGitUser"
                   autoFocus
                   className={classes.textField}
                   placeholder="Search Github User..."
            />
            <Button color="secondary" disableRipple className={classes.clearButton}>
                <CloseIcon/>
            </Button>
            <Button color="primary" variant="contained" className={classes.searchButton}>
                <SearchIcon/>
            </Button>
        </Paper>
    );

};

export default GithubUserSearchContainer;