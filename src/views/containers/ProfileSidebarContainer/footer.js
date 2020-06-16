import React       from "react";
import makeStyles  from "@material-ui/core/styles/makeStyles";
import Box         from "@material-ui/core/Box";
import Button      from "@material-ui/core/Button";
import Grid        from "@material-ui/core/Grid";
import BackIcon    from "@material-ui/icons/ArrowBack";
import ForwardIcon from "@material-ui/icons/ArrowForward";

const useStyles = makeStyles(theme => ({
    root          : {
        position       : props => props.position,
        padding        : `${theme.spacing(2)}px ${theme.spacing(1)}px`,
        backgroundColor: "rgba(0,0,0,0.67)",
        bottom         : '0',
        width          : "100%",
        textAlign      : 'center',
    },
    button        : {
        fontSize: '12px',
        padding : `4px ${theme.spacing(1)}px`
    },
    buttonPrevious: {
        marginLeft: theme.spacing(1)
    },
    buttonRight   : {
        marginRight: theme.spacing(1)
    }
}));

const SidebarFooter = ({ position }) => {

    const classes = useStyles({ position });

    return (
        <footer className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <Button color="primary" variant="contained" className={classes.button}>
                        <BackIcon/> <Box component="span" className={classes.buttonPrevious}>Previous</Box>
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button color="primary" variant="contained" className={classes.button}>
                        <Box component="span" className={classes.buttonRight}>NEXT</Box> <ForwardIcon/>
                    </Button>
                </Grid>
            </Grid>
        </footer>
    )
};

SidebarFooter.defaultProps = {
    position: "absolute"
};

export default SidebarFooter;