import React from "react";

import makeStyles from "@material-ui/core/styles/makeStyles";
import Container  from "@material-ui/core/Container";
import Grid       from "@material-ui/core/Grid";
import Avatar     from "@material-ui/core/Avatar";
import Box        from "@material-ui/core/Box";

import GithubSearchLogo          from "../../assets/github-search.jpg";
import H5                        from "../components/H5";
import GithubUserSearchContainer from "../containers/Github/UserSearchContainer";

const useStyles = makeStyles(theme => {
    return {
        topSpace       : {
            marginTop: "3rem"
        },
        brandContainer : {
            marginTop: theme.spacing(2),
            textAlign: "center"
        },
        searchContainer: {
            padding: theme.spacing(2),
            margin : "0 auto"
        },
        avatar         : {
            width : theme.spacing(18),
            height: theme.spacing(18),
            border: "6px solid darkgrey",
            margin: "0 auto"
        }
    };
});

const Home = () => {
    const classes = useStyles();

    return (
        <Container>
            <Box className={classes.topSpace}/>
            <Grid container style={{ justifyContent: 'center' }}>
                <Grid item xs={12}>
                    <Avatar className={classes.avatar} src={GithubSearchLogo}/>
                </Grid>
                <Grid item xs={12} className={classes.brandContainer}>
                    <H5>Github README Finder</H5>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={8} className={classes.searchContainer}>
                    <GithubUserSearchContainer/>
                </Grid>
            </Grid>
        </Container>
    )
};

export default Home;