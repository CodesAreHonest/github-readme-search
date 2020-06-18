import React      from "react";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    font: {
        color     : "#ffffff91",
        fontWeight: theme.typography.fontWeightLight,
    }
}));

const Paragraph = ({ children, className }) => {
    const classes = useStyles();
    return (
        <Typography paragraph className={`${className} ${classes.font}`}>
            {children}
        </Typography>
    )
};

export default Paragraph;