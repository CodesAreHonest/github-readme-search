import React, { useEffect, useState } from "react";
import Toolbar                        from "@material-ui/core/Toolbar";
import SidebarHero                    from "./hero";
import makeStyles                     from "@material-ui/core/styles/makeStyles";
import UserRepoContainer              from "../Github/UserRepoContainer";
import UseGithubUserProfile           from "../../hooks/UseGithubUserProfile";
import Box                            from "@material-ui/core/Box";

import { useParams }       from "react-router";
import { githubUserTypes } from "../../../states/GithubUser";
import MenuIcon            from "@material-ui/icons/Menu";
import IconButton          from "@material-ui/core/IconButton";

const useStyles = makeStyles(theme => ({
    searchContainer: {
        padding: `0 ${theme.spacing(2)}px`,
    },
    root           : {
        position: 'relative',
        height  : '100%',
    },
    repoContainer  : {
        maxHeight: '80vh',
        overflowY: "auto",
    },
    menuIcon       : {
        marginLeft: "auto"
    }
}));

const ReadmeSidebarContainer = ({ onDrawerClose }) => {
    const classes = useStyles();
    const { detail, getGithubUserProfile } = UseGithubUserProfile();
    const { responseType, profile } = detail;
    const { username } = useParams();

    const [name, setName] = useState("");
    const [user, setUsername] = useState("");
    const [avatarUrl, setAvatarUrl] = useState("");

    useEffect(() => {
        getGithubUserProfile(username);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if ( responseType === githubUserTypes.GET_GITHUB_USER_PROFILE_SUCCESS ) {
            const { avatar_url, login, name } = profile;
            setName(name);
            setAvatarUrl(avatar_url);
            setUsername(login);
        }

        if ( responseType === githubUserTypes.GET_GITHUB_USER_PROFILE_FAILURE ) {
            window.location.href = "/";
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [responseType]);

    return (
        <div className={classes.root}>
            <Toolbar variant="dense" disableGutters={true}>
                <IconButton color="default" edge="start" onClick={onDrawerClose} className={classes.menuIcon}>
                    <MenuIcon/>
                </IconButton>
            </Toolbar>
            <SidebarHero avatarUrl={avatarUrl} name={name} username={user}/>
            <Box className={classes.repoContainer}>
                <UserRepoContainer aside={true}/>
            </Box>
        </div>
    )
};

export default ReadmeSidebarContainer;