import React      from "react";
import Typography from "@material-ui/core/Typography";

const BodyFont = ({ children, className }) => {

    return (
        <Typography variant="body2" className={className}>
            {children}
        </Typography>
    )
};

export default BodyFont;