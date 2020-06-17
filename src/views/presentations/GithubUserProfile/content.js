import React, { useState, useEffect, Fragment } from "react";
import Box                                      from "@material-ui/core/Box";
import Grid                                     from "@material-ui/core/Grid";
import makeStyles                               from "@material-ui/core/styles/makeStyles";
import ProfileSearchRepoContainer               from "../../containers/Github/ProfileSearchRepoContainer";
import H5                                       from "../../components/H5";
import UserRepoContainer                        from "../../containers/Github/UserRepoContainer";
import SidebarFooter                            from "../../containers/ProfileSidebarContainer/footer";
import UseGithubUserProfile                     from "../../hooks/UseGithubUserProfile";
import SentimentVeryDissatisfiedIcon            from '@material-ui/icons/SentimentVeryDissatisfied';
import BodyFont                                 from "../../components/BodyFont";

const useStyles = makeStyles(theme => ({
    root             : {
        padding: `16px`,
    },
    searchContainer  : {
        marginTop: theme.spacing(2),
    },
    resultText       : {
        textAlign: 'center'
    },
    dissatisfiedIcon : {
        fontSize    : "8rem",
        color       : theme.palette.primary.light,
        marginBottom: theme.spacing(1.5)
    },
    notFoundContainer: {
        textAlign: 'center'
    }
}));

const GithubUserProfileContent = () => {
    const classes = useStyles();
    const { detail } = UseGithubUserProfile();
    const { profile } = detail;
    const [name, setName] = useState("");
    const [repoCount, setRepoCount] = useState(null);

    useEffect(() => {

        const { name, public_repos } = profile;
        setName(name);
        setRepoCount(public_repos);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const repositoryText = repoCount > 1 ? "repositories" : "repository";

    const searchContainer = (
        <Fragment>
            <H5 className={classes.resultText}>
                {name} has {repoCount} public {repositoryText}.
            </H5>

            <Box className={classes.searchContainer}>
                <ProfileSearchRepoContainer/>
            </Box>

            <Box className={classes.searchContainer}>
                <UserRepoContainer/>
            </Box>
        </Fragment>
    );

    const notFoundRepo = (
        <Box className={classes.searchContainer}>
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