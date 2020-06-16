import React      from "react";
import Avatar     from "@material-ui/core/Avatar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Toolbar    from "@material-ui/core/Toolbar";
import Box        from "@material-ui/core/Box";
import Button     from "@material-ui/core/Button";

import GithubLogo      from "../../../assets/github-search.jpg";
import H5              from "../../components/H5";
import BodyFont        from "../../components/BodyFont";
import InformationItem from "../../components/InformationItem";

import BusinessIcon   from '@material-ui/icons/Business';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon      from '@material-ui/icons/Email';
import LinkIcon       from '@material-ui/icons/Link';
import TwitterIcon    from '@material-ui/icons/Twitter';
import GitHubIcon     from '@material-ui/icons/GitHub';

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
                <H5>:name</H5>
                <BodyFont>:username</BodyFont>
            </Box>

            <Box className={classes.userInformation}>
                <Box>
                    <InformationItem
                        logo={<BusinessIcon/>}
                        text="Some company"
                    />
                </Box>
                <Box>
                    <InformationItem
                        logo={<LocationOnIcon/>}
                        text="Some location"
                    />
                </Box>
                <Box>
                    <InformationItem
                        logo={<EmailIcon/>}
                        text="yinghua@gmail.com"
                    />
                </Box>
                <Box>
                    <InformationItem
                        logo={<LinkIcon/>}
                        text="Link"
                    />
                </Box>
                <Box>
                    <InformationItem
                        logo={<TwitterIcon/>}
                        text="@yinghua"
                    />
                </Box>
            </Box>

            <Box className={classes.visitGithub}>
                <Button variant="contained" fullWidth color="primary">
                    <GitHubIcon/>
                    <Box component="span" className={classes.buttonText}>:username Github</Box>
                </Button>
            </Box>

        </div>
    );
};

export default RepositorySidebarContainer;