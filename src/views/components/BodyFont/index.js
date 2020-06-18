import React      from "react";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({
    font: {
        color: "#ffffffbd"
    }
}));

const BodyFont = ({ children, className }) => {

    const classes = useStyles();

    return (
        <Typography variant="body2" className={`${className} ${classes.font}`}>
            {children}
        </Typography>
    )
};

export default BodyFont;