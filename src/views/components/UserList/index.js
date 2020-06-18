import React          from "react";
import makeStyles     from "@material-ui/core/styles/makeStyles";
import GithubUserCard from "../GithubUserCard";
import { useHistory } from "react-router";

const useStyles = makeStyles(theme => ({
    content  : {
        height   : '65vh',
        padding  : theme.spacing(1),
        overflowY: "auto"
    },
    '@global': {
        '*::-webkit-scrollbar'      : {
            width: '0.7em'
        },
        '*::-webkit-scrollbar-track': {
            backgroundColor: "#312f2f",
        },
        '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#565555',
            outline        : '1px solid slategrey'
        }
    }
}));

const UserList = ({ userList }) => {
    const classes = useStyles();
    const history = useHistory();

    const githubUserList = userList.map((user, index) => {
        const { avatar_url: avatarUrl, login } = user;

        return (
            <GithubUserCard
                key={index}
                avatarUrl={avatarUrl}
                login={login}
                onClick={() => history.push(`/user/profile/${login}`)}
            />
        )
    });

    return (
        <div className={classes.content}>
            {githubUserList}
        </div>
    );
};

UserList.defaultProps = {
    userList: []
};

export default UserList;