import React                      from "react";
import Box                        from "@material-ui/core/Box";
import Grid                       from "@material-ui/core/Grid";
import makeStyles                 from "@material-ui/core/styles/makeStyles";
import ProfileSearchRepoContainer from "../../containers/Github/ProfileSearchRepoContainer";
import H5                         from "../../components/H5";
import UserRepoContainer          from "../../containers/Github/UserRepoContainer";
import SidebarFooter              from "../../containers/ProfileSidebarContainer/footer";

const useStyles = makeStyles(theme => ({
    root           : {
        padding: `16px`,
    },
    searchContainer: {
        marginTop: theme.spacing(2)
    },
    resultText     : {
        textAlign: 'center'
    }
}));

const GithubUserProfileContent = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Grid container style={{ justifyContent: "center" }}>
                <Grid xs={12} sm={12} md={8}>
                    <H5 className={classes.resultText}>
                        :username has 1,925 repository results
                    </H5>

                    <Box className={classes.searchContainer}>
                        <ProfileSearchRepoContainer/>
                    </Box>

                    <Box className={classes.searchContainer}>
                        <UserRepoContainer/>
                        <SidebarFooter position="none"/>
                    </Box>
                </Grid>
            </Grid>

        </Box>
    )
};

export default GithubUserProfileContent;