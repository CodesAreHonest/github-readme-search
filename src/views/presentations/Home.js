import React, { useEffect } from "react";
import { useDispatch }      from "react-redux";
import { githubUserAction } from "../../states/GithubUser";

import makeStyles from "@material-ui/core/styles/makeStyles";
import Container  from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid       from "@material-ui/core/Grid";
import Avatar     from "@material-ui/core/Avatar";
import Box        from "@material-ui/core/Box";
import Paper      from "@material-ui/core/Paper";
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon  from '@material-ui/icons/Close';
import Button     from "@material-ui/core/Button";

import GithubSearchLogo from "../../assets/github-search.jpg";

const useStyles = makeStyles(theme => {
    console.log(theme);
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
        },
        searchBox      : {
            backgroundColor: "#dfe1e5",
            borderRadius   : "18px",
            display        : "flex",
            width          : "50%",
            position       : "relative",
            margin         : "0 auto",
            padding        : "6px 11px",
            ["&:hover"]    : {
                boxShadow: "1px 0px 6px 10px #424242",
            },

            [theme.breakpoints.down('sm')]: {
                width: "50%"
            },
            [theme.breakpoints.down('sm')]: {
                width: "75%"
            },
            [theme.breakpoints.down('xs')]: {
                width: "100%"
            },

        },
        textField      : {
            backgroundColor               : "transparent",
            padding                       : "7px",
            outline                       : "none",
            border                        : "none",
            color                         : "rgba(0,0,0,0.93)",
            width                         : "80%",
            fontSize                      : theme.spacing(2),
            [theme.breakpoints.down('xs')]: {
                width: "65%"
            },
        },
        searchButton   : {
            border      : "none",
            borderRadius: theme.spacing(2),
            padding     : "7px",
            position    : "absolute",
            right       : "4px",
            top         : "3px",
            cursor      : "pointer",
            outline     : "none"
        },
        clearButton    : {
            backgroundColor               : "transparent",
            color                         : theme.palette.primary.main,
            padding                       : "4px 0",
            position                      : "absolute",
            right                         : "58px",
            [theme.breakpoints.down('xs')]: {
                right: "53px"
            },
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
                    <Typography variant="h5">Github README Finder</Typography>
                </Grid>
                <Grid item xs={12} className={classes.searchContainer}>
                    <Paper className={classes.searchBox} elevation={4}>
                        <input type="text" className={classes.textField} placeholder="Search Github User...">
                        </input>
                        <Button color="secondary" disableRipple className={classes.clearButton}>
                            <CloseIcon/>
                        </Button>
                        <Button color="primary" variant="contained" className={classes.searchButton}>
                            <SearchIcon/>
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
};

export default Home;