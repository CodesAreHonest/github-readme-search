import React, { useEffect, useState, Fragment } from "react";
import { useHistory, useParams }                from "react-router"
import Toolbar                                  from "@material-ui/core/Toolbar";
import makeStyles                               from "@material-ui/core/styles/makeStyles"
import Header                                   from "../../components/Header";
import Sidebar                                  from "../../components/Sidebar";
import RepositorySidebarContainer               from "../../containers/RepositorySidebarContainer";
import GithubUserProfileContent                 from "../RepositoryReadmeViewer/content";
import { githubUserTypes }                      from "../../../states/GithubUser";
import UseGithubUserProfile                     from "../../hooks/UseGithubUserProfile";
import CircularProgress                         from "@material-ui/core/CircularProgress";
import Box                                      from "@material-ui/core/Box";
import H5                                       from "../../components/H5";

const useStyles = makeStyles(theme => {
    return {
        root   : {
            display: 'flex',
        },
        content: {
            padding   : `0 ${theme.spacing(1)}px`,
            marginLeft: 300,
            flexGrow  : 1,
        },
        loading: {
            backgroundColor: "white"
        }
    }
});

const GithubUserRepository = () => {

    const classes = useStyles();
    const history = useHistory();
    const { username } = useParams();
    const { getGithubUserProfile, detail, resetStatus } = UseGithubUserProfile();
    const { responseType, isLoading } = detail;

    const goBack = () => history.goBack();

    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

    useEffect(() => {
        getGithubUserProfile(username);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if ( responseType === githubUserTypes.GET_GITHUB_USER_PROFILE_SUCCESS ) {
            resetStatus();
        }

        if ( responseType === githubUserTypes.GET_GITHUB_USER_PROFILE_FAILURE ) {
            resetStatus();
            window.location.href = "/";
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [responseType]);

    const content = (
        <Fragment>
            <Header
                onMenuIconClick={handleDrawerToggle}
                onBackIconClick={goBack}
            />
            <Sidebar
                open={mobileOpen}
                onDrawerClose={handleDrawerToggle}
                width={300}
            >
                <RepositorySidebarContainer/>
            </Sidebar>
            <main className={classes.content}>
                <Toolbar/>
                <GithubUserProfileContent/>
            </main>
        </Fragment>
    );

    const loadingContent = (
        <Box style={{ position: 'absolute', top: '30%', right: "50%" }}>
            <CircularProgress color="inherit" size="5rem"/>
            <H5 style={{ marginTop: '16px' }}>Loading...</H5>
        </Box>
    );

    return (
        <div className={classes.root}>
            {isLoading && loadingContent}
            {!isLoading && content}
        </div>
    )
};

export default GithubUserRepository;