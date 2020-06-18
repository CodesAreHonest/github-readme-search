import React      from "react";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    fontFamily: {
        "fontFamily": `"Inter", "mono", sans-serif`,
        fontWeight  : theme.typography.fontWeightBold,
    }
}));

const H5 = ({ children, className, ...props }) => {

    const classes = useStyles();

    return (
        <Typography variant="h5" className={`${className} ${classes.fontFamily}`} {...props}>
            {children}
        </Typography>
    )
};

export default H5;