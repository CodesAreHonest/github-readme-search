import React          from "react";
import RepositoryCard from "./RepositoryCard";
import makeStyles     from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    root     : {
        height   : '60vh',
        overflowY: "auto"
    },
    '@global': {
        '*::-webkit-scrollbar'      : {
            width: '0.4em'
        },
        '*::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.1)',
            outline        : '1px solid slategrey'
        }
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