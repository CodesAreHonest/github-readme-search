import React, { useEffect } from "react";
import makeStyles           from "@material-ui/core/styles/makeStyles";
import GithubUserCard       from "../../../components/GithubUserCard";
import UseGithubUserProfile from "../../../hooks/UseGithubUserProfile";
import { githubUserTypes }  from "../../../../states/GithubUser";
import { useHistory }       from "react-router";

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

const UserListContainer = ({ userList }) => {
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

UserListContainer.defaultProps = {
    userList: []
};

export default UserListContainer;