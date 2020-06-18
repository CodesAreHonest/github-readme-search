import React, { useState, useEffect } from "react";
import { useDispatch, useSelector }   from "react-redux";
import { useHistory }                 from "react-router";

import Button                                from "@material-ui/core/Button";
import Paper                                 from "@material-ui/core/Paper";
import CloseIcon                             from "@material-ui/icons/Close";
import SearchIcon                            from "@material-ui/icons/Search";
import Box                                   from "@material-ui/core/Box";
import MenuList                              from "@material-ui/core/MenuList";
import MenuItem                              from "@material-ui/core/MenuItem";
import makeStyles                            from "@material-ui/core/styles/makeStyles";
import { githubUserAction, githubUserTypes } from "../../../../states/GithubUser";
import useGithubUsers                        from "../../../hooks/UseGithubUsers";

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


const GithubUserSearchContainer = () => {

    const [githubUser, setGithubUser] = useState("");
    const { detail, getGithubUserWithQuery, registerUserQuery, resetStatus } = useGithubUsers();
    const { lastSearchQuery, responseType } = detail;
    const classes = useStyles();
    const history = useHistory();

    const onGithubUserChange = e => setGithubUser(e.target.value);
    const onClearUser = () => setGithubUser("");
    const isCloseButtonDisplay = githubUser.trim().length > 0;

    const onFormSubmit = e => {
        e.preventDefault();

        if ( githubUser.trim().length <= 0 ) {
            setGithubUser("");
            return false;
        }

        getGithubUserWithQuery(githubUser);
    };

    useEffect(() => {

        if ( responseType === githubUserTypes.GET_GITHUB_USERS_SUCCESS ) {
            registerUserQuery(githubUser);
            history.push("/user/result");
            resetStatus();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [responseType]);

    useEffect(() => {
        setGithubUser(lastSearchQuery);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lastSearchQuery]);

    return (
        <form id="search-github-username" noValidate={true} onSubmit={onFormSubmit}>
            <Paper className={classes.searchBox}>
                <input type="text"
                       onChange={onGithubUserChange}
                       value={githubUser}
                       name="searchGitUser"
                       autoComplete="off"
                       aria-autocomplete="none"
                       className={classes.textField}
                       placeholder="Search Github Username..."
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

GithubUserSearchContainer.defaultProps = {
    loading: false,
};

export default GithubUserSearchContainer;