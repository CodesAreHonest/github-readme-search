import React, { useState } from "react";

import Button         from "@material-ui/core/Button";
import Paper          from "@material-ui/core/Paper";
import CloseIcon      from "@material-ui/icons/Close";
import SearchIcon     from "@material-ui/icons/Search";
import makeStyles     from "@material-ui/core/styles/makeStyles";
import UseGithubRepos from "../../../hooks/UseGithubRepos";

const useStyles = makeStyles(theme => ({
    searchBox       : {
        backgroundColor: "#dfe1e5",
        borderRadius   : "18px",
        display        : "flex",
        width          : "100%",
        position       : "relative",
        margin         : "0 auto",
        padding        : "6px 11px",
        "&:hover"      : {
            boxShadow: "1px 0px 3px 5px #424242",
        },
    },
    previousSearch  : {
        position       : 'absolute',
        borderRadius   : "18px",
        width          : '100%',
        height         : 'auto',
        top            : '0px',
        right          : '0px',
        zIndex         : 1,
        backgroundColor: "#dfe1e5",
        padding        : "46px 16px 0 16px",
        boxShadow      : "1px 0px 5px 5px #424242",
    },
    previousItem    : {
        color        : "black !important",
        borderTop    : "1px solid darkgrey",
        paddingBottom: theme.spacing(1)
    },
    previousItemList: {
        paddingLeft   : theme.spacing(1),
        paddingRight  : theme.spacing(1),
        color         : "rgba(0,0,0,0.6)",
        fontSize      : "12px",
        '&:hover'     : {
            color          : "rgba(0,0,0,0.90)",
            backgroundColor: 'lightgrey'
        },
        '&:last-child': {
            borderBottomRightRadius: theme.spacing(1),
            borderBottomLeftRadius : theme.spacing(1)
        }
    },
    textField       : {
        backgroundColor               : "transparent",
        padding                       : theme.spacing(1),
        outline                       : "none",
        border                        : "none",
        color                         : "rgba(0,0,0,0.93)",
        width                         : "80%",
        fontSize                      : theme.spacing(2),
        zIndex                        : 2,
        [theme.breakpoints.down('xs')]: {
            width: "65%"
        },
    },
    searchButton    : {
        border      : "none",
        borderRadius: theme.spacing(2),
        padding     : "7px",
        position    : "absolute",
        right       : "4px",
        top         : "3px",
        cursor      : "pointer",
        outline     : "none",
        zIndex      : 2
    },
    clearButton     : {
        backgroundColor               : "transparent",
        color                         : theme.palette.primary.main,
        padding                       : "4px 0",
        position                      : "absolute",
        right                         : "58px",
        zIndex                        : 2,
        [theme.breakpoints.down('xs')]: {
            right: "53px"
        },
    }
}));


const ProfileSearchRepoContainer = () => {

    const [repo, setRepo] = useState("");
    const classes = useStyles();

    const onGithubUserChange = e => setRepo(e.target.value);
    const onClearUser = () => setRepo("");

    const isCloseButtonDisplay = repo.trim().length > 0;

    const { getUserRepos } = UseGithubRepos();

    const onFormSubmit = e => {
        e.preventDefault();

        if ( repo.trim().length <= 0 ) {
            setRepo("");
            return false;
        }

        getUserRepos(repo);
    };


    return (
        <form id="search-github-repo" noValidate={true} onSubmit={onFormSubmit}>
            <Paper className={classes.searchBox}>
                <input type="text"
                       onChange={onGithubUserChange}
                       value={repo}
                       name="searchGitRepo"
                       autoComplete="off"
                       aria-autocomplete="none"
                       className={classes.textField}
                       placeholder="Search Repository..."
                />
                {isCloseButtonDisplay
                && <Button color="secondary"
                           disableRipple
                           className={classes.clearButton}
                           onClick={onClearUser}
                >
                    <CloseIcon/>
                </Button>
                }
                <Button color="primary" type="submit" variant="contained" className={classes.searchButton}>
                    <SearchIcon/>
                </Button>
            </Paper>
        </form>
    );

};

export default ProfileSearchRepoContainer;