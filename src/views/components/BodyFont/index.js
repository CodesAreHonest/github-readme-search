import React      from "react";
import Typography from "@material-ui/core/Typography";

const BodyFont = ({ children }) => {

    return (
        <Typography variant="body2">
            {children}
        </Typography>
    )
};

export default BodyFont;