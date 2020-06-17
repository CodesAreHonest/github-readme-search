import React      from "react";
import Typography from "@material-ui/core/Typography";

const H5 = ({ children, className, ...props }) => {

    return (
        <Typography variant="h5" className={className} {...props}>
            {children}
        </Typography>
    )
};

export default H5;