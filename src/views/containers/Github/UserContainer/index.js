import React                     from "react";
import Grid                      from "@material-ui/core/Grid";
import Container                 from "@material-ui/core/Container";
import makeStyles                from "@material-ui/core/styles/makeStyles";
import Box                       from "@material-ui/core/Box";
import GithubUserSearchContainer from "../UserSearchContainer";
import BodyFont                  from "../../../components/BodyFont";
import UserListContainer         from "../UserListContainer";
import SidebarFooter             from "../../ProfileSidebarContainer/footer";

const useStyles = makeStyles(theme => ({
    root           : {
        width: "100%"
    },
    searchCount    : {
        padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`
    },
    searchContainer: {
        marginTop: theme.spacing(2)
    }
}));

const UserContainer = () => {

    const classes = useStyles();
    return (
        <content className={classes.root}>
            <Container>
                <Grid container style={{ justifyContent: "center" }}>
                    <Grid xs={12} sm={12} md={10} lg={8} className={classes.searchContainer}>
                        <GithubUserSearchContainer/>

                        <Box className={classes.searchCount}>
                            <BodyFont>
                                Results: 2077 users.
                            </BodyFont>
                        </Box>

                        <UserListContainer/>
                        <SidebarFooter position="none"/>
                    </Grid>
                </Grid>
            </Container>
        </content>
    )
};

export default UserContainer;