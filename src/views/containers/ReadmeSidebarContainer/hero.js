import React, { Fragment } from "react";
import Avatar              from "@material-ui/core/Avatar";
import Grid                from "@material-ui/core/Grid";
import Box                 from "@material-ui/core/Box";
import makeStyles          from "@material-ui/core/styles/makeStyles";

import H6       from "../../components/H6";
import BodyFont from "../../components/BodyFont";

const useStyles = makeStyles(theme => ({
    hero  : {
        padding: theme.spacing(2)
    },
    avatar: {
        height: theme.spacing(8),
        width : theme.spacing(8),
        border: '3px solid darkgrey'
    },
}));

const SidebarHero = ({ avatarUrl, name, username }) => {
    const classes = useStyles();

    return (
        <Fragment>
            <div className={classes.hero}>
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        <Avatar
                            variant="rounded"
                            src={avatarUrl}
                            className={classes.avatar}
                        />
                    </Grid>
                    <Grid item xs={8} className={classes.username}>
                        <Box>
                            <H6>{name}</H6>
                        </Box>
                        <Box>
                            <BodyFont>
                                {username}
                            </BodyFont>
                        </Box>
                    </Grid>
                </Grid>
            </div>
        </Fragment>
    )

};

export default SidebarHero;