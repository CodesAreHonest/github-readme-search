import React                 from "react";
import Box                   from "@material-ui/core/Box";
import makeStyles            from "@material-ui/core/styles/makeStyles";
import Grid                  from "@material-ui/core/Grid";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import StarLogo              from "@material-ui/icons/StarBorder";
import Divider               from "@material-ui/core/Divider";
import BodyFont              from "../../../components/BodyFont";
import Paragraph             from "../../../components/Paragraph";

const useStyles = makeStyles(theme => ({
    root         : {
        borderLeft: `${theme.spacing(1)}px solid transparent`,
        cursor    : "pointer",
        '&:hover' : {
            borderLeft     : `${theme.spacing(1)}px solid ${theme.palette.common.black}`,
            backgroundColor: "rgba(0,0,0,0.24)",
            "& $title"     : {
                color: theme.palette.primary.light,
            }
        },

    },
    container    : {
        padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`
    },
    avatar       : {
        background: "transparent"
    },
    logoContainer: {
        position   : "relative",
        top        : "3px",
        marginRight: theme.spacing(0.5)
    },
    logoSize     : {
        width : theme.spacing(2),
        height: theme.spacing(2)
    },
    title        : {
        padding      : theme.spacing(0.2),
        letterSpacing: 1.15
    },
    paragraph    : {
        fontSize: "12px",
        padding : `${theme.spacing(0.5)}px 0`,
    },
    divider      : {
        marginLeft : theme.spacing(2),
        marginRight: theme.spacing(2)
    }
}));

const RepositoryCard = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Divider className={classes.divider}/>
            <Box className={classes.container}>
                <BodyFont className={classes.title}>
                    :repository-name
                </BodyFont>
                <Paragraph className={classes.paragraph}>
                    123123123
                </Paragraph>
                <Grid container spacing={1}>
                    <Grid xs item>
                        <Box component="span" className={classes.logoContainer}>
                            <FiberManualRecordIcon variant="small" className={classes.logoSize}/>
                        </Box>
                        <Box component="span" className={classes.paragraph}>
                            :language
                        </Box>
                    </Grid>
                    <Grid xs item>
                        <Box component="span" className={classes.logoContainer}>
                            <StarLogo variant="small" className={classes.logoSize}/>
                        </Box>
                        <Box component="span" className={classes.paragraph}>
                            :star
                        </Box>
                    </Grid>
                    <Grid xs={6} item>
                        <Box component="span" className={classes.paragraph}>
                            Updated on Sep 3, 2019
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
};

export default RepositoryCard;