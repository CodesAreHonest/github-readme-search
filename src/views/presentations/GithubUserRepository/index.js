import React, { useState }        from "react";
import { useHistory }             from "react-router"
import Toolbar                    from "@material-ui/core/Toolbar";
import makeStyles                 from "@material-ui/core/styles/makeStyles"
import Header                     from "../../components/Header";
import Sidebar                    from "../../components/Sidebar";
import RepositorySidebarContainer from "../../containers/RepositorySidebarContainer";
import GithubUserProfileContent   from "../GithubUserProfile/content";

const useStyles = makeStyles(theme => {
    return {
        root   : {
            display: 'flex'
        },
        content: {
            padding   : `0 ${theme.spacing(1)}px`,
            marginLeft: 300,
            flexGrow  : 1
        }
    }
});

const GithubUserRepository = () => {

    const classes = useStyles();
    const history = useHistory();

    const goBack = () => history.push("/");

    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

    return (
        <div className={classes.root}>
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
        </div>
    )
};

export default GithubUserRepository;