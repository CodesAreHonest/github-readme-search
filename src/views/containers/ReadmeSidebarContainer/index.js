import React             from "react";
import Toolbar           from "@material-ui/core/Toolbar";
import SidebarHero       from "./hero";
import makeStyles        from "@material-ui/core/styles/makeStyles";
import UserRepoContainer from "../Github/UserRepoContainer";

const useStyles = makeStyles(theme => ({
    searchContainer: {
        padding: `0 ${theme.spacing(2)}px`,
    },
    root           : {
        position: 'relative',
        height  : '100%',
    }
}));

const ReadmeSidebarContainer = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Toolbar variant="dense"/>
            <SidebarHero/>
            <UserRepoContainer/>
        </div>
    )
};

export default ReadmeSidebarContainer;