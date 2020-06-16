import React                     from "react";
import Grid                      from "@material-ui/core/Grid";
import Container                 from "@material-ui/core/Container";
import makeStyles                from "@material-ui/core/styles/makeStyles";
import Paper                     from "@material-ui/core/Paper";
import GithubUserSearchContainer from "../UserSearchContainer";

const useStyles = makeStyles(theme => ({
    root           : {
        width: "100%"
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

                        <Paper>
                            123
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </content>
    )
};

export default UserContainer;