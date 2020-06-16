import React                     from "react";
import Toolbar                   from "@material-ui/core/Toolbar";
import SidebarHero               from "./hero";
import GithubRepoSearchContainer from "../Github/RepoSearchContainer";
import Box                       from "@material-ui/core/Box";
import makeStyles                from "@material-ui/core/styles/makeStyles";
import UserRepoContainer         from "../Github/UserRepoContainer";
import SidebarFooter             from "./footer";

const useStyles = makeStyles(theme => ({
    searchContainer: {
        padding: `0 ${theme.spacing(2)}px`,
    },
    root           : {
        position: 'relative',
        height  : '100%',
    }
}));

const ProfileSidebarContainer = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Toolbar variant="dense"/>
            <SidebarHero/>
            <Box className={classes.searchContainer}>
                <GithubRepoSearchContainer/>
            </Box>
            <UserRepoContainer/>
            <SidebarFooter/>
        </div>
    )
};

export default ProfileSidebarContainer;