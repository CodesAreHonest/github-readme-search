import React      from "react";
import Typography from "@material-ui/core/Typography";

const Paragraph = ({ children, className }) => {
    return (
        <Typography paragraph className={className}>
            {children}
        </Typography>
    )
};

export default Paragraph;