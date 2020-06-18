import React      from "react";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    fontFamily: {
        "fontFamily": `"Inter", "mono", sans-serif !important`,
        fontWeight  : theme.typography.fontWeightMedium,
    }
}));

const H6 = ({ children, className, ...props }) => {

    const classes = useStyles();

    return (
        <Typography variant="h6" className={`${classes.fontFamily} ${className}`} {...props}>
            {children}
        </Typography>
    )
};

export default H6;