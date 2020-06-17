import React      from "react";
import Box        from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography"
import Container  from "@material-ui/core/Container";
import Header     from "../components/Header";

const useStyles = makeStyles(theme => ({
    noResultFound: {
        textAlign: "center",
        marginTop: "5rem"
    },

}));

const NotFoundPage = () => {

    const classes = useStyles();

    return (
        <Container>
            <Header/>
            <Box className={classes.noResultFound}>
                <Typography variant="h1">
                    404
                </Typography>
            </Box>
        </Container>
    )
};

export default NotFoundPage;