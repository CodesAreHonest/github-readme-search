import React      from "react";
import Grid       from "@material-ui/core/Grid";
import Avatar     from "@material-ui/core/Avatar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import H6         from "../H6";

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
    },
    login      : {
        padding: "3px 0"
    }
}));

const GithubUserCard = ({ avatarUrl, id, login, onClick }) => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root} onClick={onClick}>
            <Grid item xs={1}>
                <Avatar src={avatarUrl}/>
            </Grid>
            <Grid item xs={11} className={classes.login}>
                <H6>
                    {login}
                </H6>
            </Grid>
        </Grid>
    )
};

export default GithubUserCard;