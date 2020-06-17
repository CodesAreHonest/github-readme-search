import React          from "react";
import makeStyles     from "@material-ui/core/styles/makeStyles";
import GithubUserCard from "../../../components/GithubUserCard";

const useStyles = makeStyles(theme => ({
    content  : {
        height   : '65vh',
        padding  : theme.spacing(1),
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

const UserListContainer = () => {
    const classes = useStyles();
    return (
        <div className={classes.content}>
            <GithubUserCard/>
            <GithubUserCard/>
            <GithubUserCard/>
            <GithubUserCard/>
            <GithubUserCard/>
        </div>
    );
};

export default UserListContainer;