import React, { Fragment } from "react";
import PropTypes           from "prop-types";
import Box                 from "@material-ui/core/Box";
import makeStyles          from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    logoContainer: {
        position   : "relative",
        top        : "6px",
        marginRight: theme.spacing(1)
    },
    logoSize     : {
        width : theme.spacing(2),
        height: theme.spacing(2)
    },
    paragraph    : {
        fontSize: "12px",
        padding : `${theme.spacing(0.5)}px 0`,
    }
}));

const InformationItem = ({ logo, text }) => {
    const classes = useStyles();

    return (
        <Fragment>
            <Box component="span" className={classes.logoContainer}>
                {logo}
            </Box>
            <Box component="span" className={classes.paragraph}>
                {text}
            </Box>
        </Fragment>
    )
};

InformationItem.propTypes = {
    logo: PropTypes.element.isRequired,
    text: PropTypes.string.isRequired
};

export default InformationItem