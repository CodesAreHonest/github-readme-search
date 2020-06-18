import React            from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const Loading = ({ ...props }) => {
    return (
        <CircularProgress color="secondary" {...props} />
    )
};

export default Loading;