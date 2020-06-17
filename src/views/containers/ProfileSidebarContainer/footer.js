import React       from "react";
import makeStyles  from "@material-ui/core/styles/makeStyles";
import Button      from "@material-ui/core/Button";
import Grid        from "@material-ui/core/Grid";
import BackIcon    from "@material-ui/icons/ArrowBack";
import ForwardIcon from "@material-ui/icons/ArrowForward";
import BodyFont    from "../../components/BodyFont";
import Box         from "@material-ui/core/Box";

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
    },
    fontBox       : {
        padding: theme.spacing(0.5)
    }
}));

const SidebarFooter = ({ position, page, totalPage, onPreviousPageClick, onNextPageClick }) => {

    const classes = useStyles({ position });

    return (
        <footer className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs>
                    {page !== 1 &&
                    <Button
                        color="primary"
                        variant="contained"
                        className={classes.button}
                        onPreviousPageClick={onPreviousPageClick}
                    >
                        <BackIcon/>
                    </Button>}
                </Grid>
                <Grid item xs>
                    <Box className={classes.fontBox}>
                        <BodyFont>
                            Page {page} of {totalPage}
                        </BodyFont>
                    </Box>
                </Grid>
                <Grid item xs>
                    {page !== totalPage &&
                    <Button color="primary"
                            variant="contained"
                            className={classes.button}
                            onClick={onNextPageClick}
                    >
                        <ForwardIcon/>
                    </Button>}
                </Grid>
            </Grid>
        </footer>
    )
};

SidebarFooter.defaultProps = {
    position : "absolute",
    page     : 1,
    perPage  : 10,
    totalPage: 1
};

export default SidebarFooter;