import React                     from "react";
import Toolbar                   from "@material-ui/core/Toolbar";
import SidebarHero               from "./hero";
import GithubRepoSearchContainer from "../GithubRepoSearchContainer";
import Box                       from "@material-ui/core/Box";
import makeStyles                from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    searchContainer: {
        padding: `0 ${theme.spacing(2)}px`
    }
}));

const SidebarContainer = () => {
    const classes = useStyles();

    return (
        <div>
            <Toolbar variant="dense"/>
            <SidebarHero/>
            <Box className={classes.searchContainer}>
                <GithubRepoSearchContainer/>
            </Box>
        </div>
    )
};

export default SidebarContainer;