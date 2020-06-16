import React, { useState } from "react";
import FormControl         from "@material-ui/core/FormControl";
import InputLabel          from "@material-ui/core/InputLabel";
import Select              from "@material-ui/core/Select";
import MenuItem            from "@material-ui/core/MenuItem";

import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    formControl: {
        minWidth: 200,
    },
    textColor  : {
        color          : "lightgrey",
        "&.Mui-focused": {
            color: "lightgrey"
        }
    }
}));

const BranchSelect = () => {

    const [branch, setBranch] = useState("master");
    const classes = useStyles();

    return (
        <FormControl variant="filled" className={classes.formControl}>
            <InputLabel className={classes.textColor}>Branch</InputLabel>
            <Select
                disableUnderline={true}
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
            >
                <MenuItem value="master">Master</MenuItem>
                <MenuItem value="develop">Develop</MenuItem>
            </Select>
        </FormControl>


    )
};

export default BranchSelect