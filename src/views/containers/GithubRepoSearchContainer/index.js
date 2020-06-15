import React, { useState } from "react";

import Button     from "@material-ui/core/Button";
import Paper      from "@material-ui/core/Paper";
import CloseIcon  from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";
import Box        from "@material-ui/core/Box";
import MenuList   from "@material-ui/core/MenuList";
import MenuItem   from "@material-ui/core/MenuItem";
import makeStyles from "@material-ui/core/styles/makeStyles";
import BodyFont   from "../../components/BodyFont";

const useStyles = makeStyles(theme => ({
    searchBox   : {
        backgroundColor: theme.palette.common.dark,
        borderRadius   : "18px",
        display        : "flex",
        width          : "100%",
        position       : "relative",
        margin         : "0 auto",
        padding        : "7px 11px",
        "&:hover"      : {
            boxShadow: "1px 0px 3px 5px #424242",
        },
    },
    textField   : {
        backgroundColor               : "transparent",
        outline                       : "none",
        border                        : "none",
        borderRight                   : props => props.isCloseButtonDisplay ? "1px solid darkgrey" : "none",
        color                         : "#dfe1e5",
        width                         : "75%",
        fontSize                      : theme.spacing(2),
        zIndex                        : 2,
        [theme.breakpoints.down('xs')]: {
            width: "65%"
        },
    },
    searchButton: {
        border      : "none",
        borderRadius: theme.spacing(2),
        padding     : "3px",
        position    : "absolute",
        right       : "3px",
        top         : "2px",
        cursor      : "pointer",
        outline     : "none",
        zIndex      : 2,
        background  : theme.palette.primary.main
    },
    clearButton : {
        backgroundColor               : "transparent",
        color                         : theme.palette.primary.light,
        padding                       : "4px 0",
        position                      : "absolute",
        right                         : "50px",
        top                           : "1px",
        zIndex                        : 2,
        [theme.breakpoints.down('xs')]: {
            right: "53px"
        },
    },
    resultCount : {
        padding: "8px 12px",
    }

}));


const GithubRepoSearchContainer = () => {

    const [githubRepo, setGithubRepo] = useState("");
    const isCloseButtonDisplay        = githubRepo.trim().length > 0;
    const classes                     = useStyles({ isCloseButtonDisplay });

    const onGithubUserChange = e => setGithubRepo(e.target.value);
    const onClearUser        = () => setGithubRepo("");

    return (
        <form id="search-user-repo">
            <Paper className={classes.searchBox}>
                <input type="text"
                       onChange={onGithubUserChange}
                       value={githubRepo}
                       name="searchGitUser"
                       autoComplete="off"
                       aria-autocomplete="none"
                       className={`${classes.textField}`}
                       placeholder="Find a Repository ..."
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

            <Box className={classes.resultCount}>
                <BodyFont>
                    Total Repositories Found: <b>1</b>
                </BodyFont>
            </Box>
        </form>
    );

};

export default GithubRepoSearchContainer;