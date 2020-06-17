import React            from "react";
import Grid             from "@material-ui/core/Grid";
import Avatar           from "@material-ui/core/Avatar";
import GithubSearchLogo from "../../../assets/github-search.jpg";
import makeStyles       from "@material-ui/core/styles/makeStyles";
import H5               from "../H5";
import BodyFont         from "../BodyFont";

const useStyles = makeStyles(theme => ({
    root       : {
        padding  : theme.spacing(1),
        "&:hover": {
            borderRadius   : theme.spacing(1),
            backgroundColor: "black",
            cursor         : "pointer"
        }
    },
    avatar     : {
        height: theme.spacing(12),
        width : theme.spacing(12)
    },
    description: {
        padding: `${theme.spacing(1)}px 0`
    }
}));

const GithubUserCard = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid item xs={2}>
                <Avatar src={GithubSearchLogo} variant="rounded" className={classes.avatar}/>
            </Grid>
            <Grid item xs={10}>
                <H5>
                    :username
                </H5>

                <BodyFont>
                    :name
                </BodyFont>

                <BodyFont className={classes.description}>
                    :description
                </BodyFont>
            </Grid>
        </Grid>
    )
};

export default GithubUserCard;