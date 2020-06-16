import React      from "react";
import Typography from "@material-ui/core/Typography";

const H5 = ({ children, className }) => {

    return (
        <Typography variant="h5" className={className}>
            {children}
        </Typography>
    )
};

export default H5;