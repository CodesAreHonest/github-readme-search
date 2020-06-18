import React, { useEffect, useState } from "react";
import Avatar                         from "@material-ui/core/Avatar";
import makeStyles                     from "@material-ui/core/styles/makeStyles";
import Toolbar                        from "@material-ui/core/Toolbar";
import Box                            from "@material-ui/core/Box";
import Button                         from "@material-ui/core/Button";

import GitHubIcon from '@material-ui/icons/GitHub';

import RepositorySidebarDetail      from "./detail";
import RepositorySidebarInformation from "./information";
import UseGithubUserProfile         from "../../hooks/UseGithubUserProfile";

const useStyles = makeStyles(theme => ({
    root           : {
        position: 'relative',
        height  : '100%',
        padding : theme.spacing(2)
    },
    avatar         : {
        width                         : theme.spacing(32),
        height                        : theme.spacing(32),
        border                        : "4px solid lightgrey",
        [theme.breakpoints.down('sm')]: {
            width : theme.spacing(24),
            height: theme.spacing(24),
        },
    },
    userDetail     : {
        marginTop: theme.spacing(2),
    },
    userInformation: {
        marginTop: theme.spacing(2)
    },
    visitGithub    : {
        marginTop: theme.spacing(4),
        padding  : theme.spacing(1)
    },
    buttonText     : {
        marginLeft: theme.spacing(1),
        fontSize  : "1em"
    }
}));

const RepositorySidebarContainer = () => {

    const classes = useStyles();
    const { detail } = UseGithubUserProfile();
    const { profile } = detail;

    const [avatarUrl, setAvatarUrl] = useState("");
    const [name, setName] = useState("");
    const [login, setLogin] = useState("");
    const [company, setCompany] = useState("");
    const [location, setLocation] = useState("");
    const [email, setEmail] = useState("");
    const [twitter, setTwitter] = useState("");
    const [htmlUrl, setHtmlUrl] = useState("");

    useEffect(() => {

        const { login, name, company, location, email, twitter_username, html_url, avatar_url } = profile;
        setName(name);
        setLogin(login);
        setCompany(company);
        setLocation(location);
        setEmail(email);
        setTwitter(twitter_username);
        setHtmlUrl(html_url);
        setAvatarUrl(avatar_url);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={classes.root}>
            <Toolbar variant="dense"/>
            <Avatar variant="rounded" src={avatarUrl} className={classes.avatar}/>

            <Box className={classes.userDetail}>
                <RepositorySidebarDetail
                    name={name}
                    username={login}/>
            </Box>

            <Box className={classes.userInformation}>
                <RepositorySidebarInformation
                    company={company}
                    location={location}
                    email={email}
                    twitter={twitter}
                />
            </Box>

            <Box className={classes.visitGithub}>
                <Button
                    variant="contained"
                    fullWidth
                    color="primary"
                    onClick={() => window.open(htmlUrl, "_blank")}
                >
                    <GitHubIcon/>
                    <Box component="span" className={classes.buttonText}>
                        view in Github
                    </Box>
                </Button>
            </Box>

        </div>
    );
};

export default RepositorySidebarContainer;