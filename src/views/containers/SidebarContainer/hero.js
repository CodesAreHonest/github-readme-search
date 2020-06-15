import React, { Fragment } from "react";
import Avatar              from "@material-ui/core/Avatar";
import Grid                from "@material-ui/core/Grid";
import Box                 from "@material-ui/core/Box";
import Divider             from "@material-ui/core/Divider";
import makeStyles          from "@material-ui/core/styles/makeStyles";

import GithubSearchLogo from "../../../assets/github-search.jpg";
import H6               from "../../components/H6";
import BodyFont         from "../../components/BodyFont";

const useStyles = makeStyles(theme => ({
    hero   : {
        padding: theme.spacing(2)
    },
    avatar : {
        height: theme.spacing(8),
        width : theme.spacing(8),
        border: '3px solid darkgrey'
    },
    divider: {
        marginBottom: theme.spacing(2),
        marginLeft  : theme.spacing(2),
        marginRight : theme.spacing(2)
    }
}));

const SidebarHero = () => {
    const classes = useStyles();

    return (
        <Fragment>
            <div className={classes.hero}>
                <Grid container spacing={1}>
                    <Grid item xs={3}>
                        <Avatar
                            variant="rounded"
                            src={GithubSearchLogo}
                            className={classes.avatar}
                        />
                    </Grid>
                    <Grid item xs={9} className={classes.username}>
                        <Box>
                            <H6>:name</H6>
                        </Box>
                        <Box>
                            <BodyFont>
                                :username
                            </BodyFont>
                        </Box>
                    </Grid>
                </Grid>
            </div>
            <Divider className={classes.divider}/>
        </Fragment>
    )

};

export default SidebarHero;