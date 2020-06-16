import React          from "react";
import { useHistory } from "react-router"
import Toolbar        from "@material-ui/core/Toolbar";
import makeStyles     from "@material-ui/core/styles/makeStyles"
import Header         from "../../components/Header";
import UserContainer  from "../../containers/Github/UserContainer";

const useStyles = makeStyles(theme => {
    return {
        content: {
            padding: `0 ${theme.spacing(1)}px`,
        }
    }
});

const UserSearchResult = () => {
    const classes = useStyles();
    const history = useHistory();
    const goBack = () => history.push("/");

    return (
        <div className={classes.root}>
            <Header
                onBackIconClick={goBack}
            />
            <main className={classes.content}>
                <Toolbar/>
                <UserContainer/>
            </main>
        </div>
    )
};

export default UserSearchResult;