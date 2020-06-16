import React      from "react";
import Avatar     from "@material-ui/core/Avatar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Toolbar    from "@material-ui/core/Toolbar";
import Box        from "@material-ui/core/Box";
import Button     from "@material-ui/core/Button";

import GitHubIcon from '@material-ui/icons/GitHub';
import GithubLogo from "../../../assets/github-search.jpg";

import RepositorySidebarDetail      from "./detail";
import RepositorySidebarInformation from "./information";

const useStyles = makeStyles(theme => ({
    root           : {
        position: 'relative',
        height  : '100%',
        padding : theme.spacing(2)
    },
    avatar         : {
        width : theme.spacing(32),
        height: theme.spacing(32),
        border: "4px solid lightgrey"
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

    return (
        <div className={classes.root}>
            <Toolbar variant="dense"/>
            <Avatar variant="rounded" src={GithubLogo} className={classes.avatar}/>

            <Box className={classes.userDetail}>
                <RepositorySidebarDetail
                    name=":name"
                    username=":username"/>
            </Box>

            <Box className={classes.userInformation}>
                <RepositorySidebarInformation/>
            </Box>

            <Box className={classes.visitGithub}>
                <Button variant="contained" fullWidth color="primary">
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