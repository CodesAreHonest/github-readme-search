import React, { useState }    from "react";
import { useHistory }         from "react-router"
import Toolbar                from "@material-ui/core/Toolbar";
import makeStyles             from "@material-ui/core/styles/makeStyles"
import Header                 from "../../components/Header";
import Sidebar                from "../../components/Sidebar";
import MarkdownContainer      from "../../containers/Github/MarkdownContainer";
import ReadmeSidebarContainer from "../../containers/ReadmeSidebarContainer";

const useStyles = makeStyles(theme => {
    return {
        content: {
            padding                       : `0 ${theme.spacing(1)}px`,
            marginLeft                    : 280,
            flexGrow                      : 1,
            [theme.breakpoints.down('xs')]: {
                marginLeft: 0,
                flexGrow  : 0
            },

        }
    }
});

const RepositoryReadmeViewer = () => {

    const classes = useStyles();
    const history = useHistory();

    const goBack = () => history.goBack();

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
                width={280}
            >
                <ReadmeSidebarContainer onDrawerClose={handleDrawerToggle}/>
            </Sidebar>
            <main className={classes.content}>
                <Toolbar/>
                <MarkdownContainer/>
            </main>
        </div>
    )
};

export default RepositoryReadmeViewer;