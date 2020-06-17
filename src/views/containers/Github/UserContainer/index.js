import React, { Fragment, useState } from "react";
import Grid                          from "@material-ui/core/Grid";
import Container                     from "@material-ui/core/Container";
import makeStyles                    from "@material-ui/core/styles/makeStyles";
import Box                           from "@material-ui/core/Box";
import GithubUserSearchContainer     from "../UserSearchContainer";
import BodyFont                      from "../../../components/BodyFont";
import UserListContainer             from "../UserListContainer";
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

import UseGithubUsers from "../../../hooks/UseGithubUsers";

const useStyles = makeStyles(theme => ({
    root            : {
        width: "100%"
    },
    searchCount     : {
        padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`
    },
    searchContainer : {
        marginTop: theme.spacing(2)
    },
    noResultFound   : {
        textAlign: "center"
    },
    dissatisfiedIcon: {
        fontSize    : "8rem",
        color       : theme.palette.primary.light,
        marginBottom: theme.spacing(1.5)
    }
}));

const UserContainer = () => {

    const classes = useStyles();
    const { detail, isLoading } = UseGithubUsers();
    const { count: userCount, data } = detail;


    const NoResultFound = (
        <Box className={classes.noResultFound}>
            <SentimentVeryDissatisfiedIcon className={classes.dissatisfiedIcon}/>

            <BodyFont>
                We can't seem to find the record you looking for.
            </BodyFont>
        </Box>
    );

    const DisplayResults = (
        <Fragment>
            <UserListContainer userList={data}/>
        </Fragment>
    );

    const userCountText = `${userCount} ${userCount === 1 ? 'user' : 'users'} found`;

    return (
        <content className={classes.root}>
            <Container>
                <Grid container style={{ justifyContent: "center" }}>
                    <Grid item xs={12} sm={12} md={10} lg={8} className={classes.searchContainer}>
                        <GithubUserSearchContainer loading={isLoading}/>

                        <Box className={classes.searchCount}>
                            <BodyFont>
                                {userCount > 0 && userCountText}
                            </BodyFont>
                        </Box>

                        {userCount === 0 && NoResultFound}
                        {userCount > 0 && DisplayResults}
                    </Grid>
                </Grid>
            </Container>
        </content>
    )
};

export default UserContainer;