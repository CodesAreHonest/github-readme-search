import React, { useEffect } from "react";
import { useDispatch }      from "react-redux";
import { githubUserAction } from "../../states/GithubUser";

import makeStyles from "@material-ui/core/styles/makeStyles";
import Container  from "@material-ui/core/Container";
import Grid       from "@material-ui/core/Grid";
import Avatar     from "@material-ui/core/Avatar";
import Box        from "@material-ui/core/Box";

import GithubSearchLogo          from "../../assets/github-search.jpg";
import H5                        from "../components/H5";
import GithubUserSearchContainer from "../containers/GithubUserSearchContainer";

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
    const dispatch = useDispatch();
    const classes  = useStyles();

    const getGithubUser = () => {
        dispatch(githubUserAction.getGithubUsers('123'))
    };

    useEffect(() => {
        getGithubUser()
    }, []);

    return (
        <Container>
            <Box className={classes.topSpace}/>
            <Grid container>
                <Grid item xs={12}>
                    <Avatar className={classes.avatar} src={GithubSearchLogo}/>
                </Grid>
                <Grid item xs={12} className={classes.brandContainer}>
                    <H5>Github README Finder</H5>
                </Grid>
                <Grid item xs={12} className={classes.searchContainer}>
                    <GithubUserSearchContainer/>
                </Grid>
            </Grid>
        </Container>
    )
};

export default Home;