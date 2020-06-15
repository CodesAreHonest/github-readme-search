import React      from "react";
import Typography from "@material-ui/core/Typography";

const H5 = ({ children }) => {

    return (
        <Typography variant="h5">
            {children}
        </Typography>
    )
};

export default H5;