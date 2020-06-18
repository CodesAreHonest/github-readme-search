import React, { useState, useEffect, Fragment } from "react";
import Box                                      from "@material-ui/core/Box";
import Grid                                     from "@material-ui/core/Grid";
import makeStyles                               from "@material-ui/core/styles/makeStyles";
import H5                                       from "../../components/H5";
import UserRepoContainer                        from "../../containers/Github/UserRepoContainer";
import UseGithubUserProfile                     from "../../hooks/UseGithubUserProfile";
import SentimentVeryDissatisfiedIcon            from '@material-ui/icons/SentimentVeryDissatisfied';
import BodyFont                                 from "../../components/BodyFont";
import Loading                                  from "../../components/Loading";

const useStyles = makeStyles(theme => ({
    root             : {
        padding: `16px`,
    },
    searchContainer  : {
        marginTop: theme.spacing(2),
        height   : '80vh',
        overflowY: "auto"
    },
    resultText       : {
        textAlign: 'center'
    },
    dissatisfiedIcon : {
        fontSize    : "8rem",
        color       : theme.palette.secondary.light,
        marginBottom: theme.spacing(1.5)
    },
    notFoundContainer: {
        marginTop: "5rem",
        textAlign: 'center'
    }
}));

const GithubUserProfileContent = () => {
    const classes = useStyles();
    const { detail } = UseGithubUserProfile();
    const { profile, responseType, isLoading } = detail;
    const [name, setName] = useState("");
    const [repoCount, setRepoCount] = useState(null);

    useEffect(() => {

        const { login, public_repos } = profile;
        setName(login);
        setRepoCount(public_repos);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const repositoryText = repoCount > 1 ? "repositories" : "repository";

    const loadingContainer = (
        <Box className={classes.notFoundContainer}>
            <Loading size={60} thickness={4} style={{ margin: "0 auto" }}/>
            <H5>Loading ...</H5>
        </Box>
    );

    const searchContainer = (
        <Fragment>
            <H5 className={classes.resultText}>
                {name}'s public {repositoryText}.
            </H5>
            <Box className={classes.searchContainer}>
                {isLoading && loadingContainer}
                {!isLoading && <UserRepoContainer isUserExist={responseType}/>}
            </Box>
        </Fragment>
    );

    const notFoundRepo = (
        <Box className={classes.notFoundContainer}>
            <SentimentVeryDissatisfiedIcon className={classes.dissatisfiedIcon}/>

            <BodyFont>
                This user does not have any repository.
            </BodyFont>
        </Box>
    );

    return (
        <Box className={classes.root}>
            <Grid container style={{ justifyContent: "center" }}>
                <Grid xs={12} sm={12} md={8} item>
                    {repoCount > 0 && searchContainer}
                    {repoCount === 0 && notFoundRepo}
                </Grid>
            </Grid>
        </Box>
    )
};

export default GithubUserProfileContent;