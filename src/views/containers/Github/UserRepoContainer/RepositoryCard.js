import React                 from "react";
import Box                   from "@material-ui/core/Box";
import makeStyles            from "@material-ui/core/styles/makeStyles";
import Grid                  from "@material-ui/core/Grid";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import StarLogo              from "@material-ui/icons/StarBorder";
import Divider               from "@material-ui/core/Divider";
import BodyFont              from "../../../components/BodyFont";
import Paragraph             from "../../../components/Paragraph";

import { useParams } from "react-router";

const useStyles = makeStyles(theme => ({
    root           : {
        padding  : theme.spacing(1),
        cursor   : "pointer",
        '&:hover': {
            backgroundColor: "rgba(0,0,0,0.24)",
            borderRadius   : theme.spacing(2),
            "& $title"     : {
                color: theme.palette.primary.light,
            }
        },

    },
    "root@selected": {
        padding        : theme.spacing(1),
        cursor         : "pointer",
        backgroundColor: "rgba(0,0,0,0.24)",
        borderRadius   : theme.spacing(2),
        "& $title"     : {
            color: theme.palette.primary.light,
        }
    },
    avatar         : {
        background: "transparent"
    },
    logoContainer  : {
        position   : "relative",
        top        : "3px",
        marginRight: theme.spacing(0.5)
    },
    logoSize       : {
        width : theme.spacing(2),
        height: theme.spacing(2)
    },
    title          : {
        padding      : theme.spacing(0.2),
        letterSpacing: 1.15
    },
    paragraph      : {
        fontSize: "12px",
        padding : `${theme.spacing(0.5)}px 0`,
    },
    divider        : {
        marginLeft : theme.spacing(2),
        marginRight: theme.spacing(2)
    }
}));

const RepositoryCard = ({ name, description, updatedAt, starsCount, language, onClick }) => {
    const classes = useStyles();
    const { repository } = useParams();

    return (
        <Box className={classes.container} onClick={onClick}>
            <Box className={repository === name ? classes["root@selected"] : classes.root}>
                <BodyFont className={classes.title}>
                    {name}
                </BodyFont>
                <Paragraph className={classes.paragraph}>
                    {description}
                </Paragraph>

                <Grid container spacing={1}>
                    {language && <Grid xs item>
                        <Box component="span" className={classes.logoContainer}>
                            <FiberManualRecordIcon variant="small" className={classes.logoSize}/>
                        </Box>
                        <Box component="span" className={classes.paragraph}>
                            {language}
                        </Box>
                    </Grid>}
                    <Grid xs item>
                        <Box component="span" className={classes.logoContainer}>
                            <StarLogo variant="small" className={classes.logoSize}/>
                        </Box>
                        <Box component="span" className={classes.paragraph}>
                            {starsCount}
                        </Box>
                    </Grid>
                    {updatedAt && <Grid xs={6} item>
                        <Box component="span" className={classes.paragraph}>
                            Updated on {new Date(updatedAt).toDateString()}
                        </Box>
                    </Grid>}
                </Grid>
            </Box>
        </Box>
    )
};

export default RepositoryCard;