import React          from "react";
import RepositoryCard from "./RepositoryCard";
import makeStyles     from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    root: {
        height   : '60vh',
        overflowY: "auto"
    }
}));

const UserRepoContainer = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <RepositoryCard/>
            <RepositoryCard/>
            <RepositoryCard/>
            <RepositoryCard/>
            <RepositoryCard/>
            <RepositoryCard/>
        </div>
    )
};

export default UserRepoContainer;