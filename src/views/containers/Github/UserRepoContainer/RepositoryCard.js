import React                 from "react";
import Box                   from "@material-ui/core/Box";
import makeStyles            from "@material-ui/core/styles/makeStyles";
import Grid                  from "@material-ui/core/Grid";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import StarLogo              from "@material-ui/icons/StarBorder";
import H6                    from "../../../components/H6";
import Paragraph             from "../../../components/Paragraph";

import { useParams } from "react-router";
import BodyFont      from "../../../components/BodyFont";

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
        color     : theme.palette.primary.light,
        fontWeight: 700,
    },
    paragraph      : {
        fontSize: "12px",
        padding : `${theme.spacing(0.5)}px 0`,
    },
    asideParagraph : {
        fontSize: "12px"
    },
    divider        : {
        color      : "white",
        marginLeft : theme.spacing(2),
        marginRight: theme.spacing(2)
    },
    criteria       : {
        textAlign : "left",
        paddingTop: theme.spacing(2)
    },
}));

const RepositoryCard = ({ name, description, updatedAt, starsCount, language, onClick, aside }) => {
    const classes = useStyles();
    const { repository } = useParams();

    const asideDesign = (
        <Box>
            <H6 className={classes.title}>
                {name}
            </H6>
            {description && <BodyFont className={classes.asideParagraph}>
                {description}
            </BodyFont>}
        </Box>
    );

    const pageDesign = (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                <H6 className={classes.title}>
                    {name}
                </H6>
                <Paragraph className={classes.paragraph}>
                    {description}
                </Paragraph>

                {updatedAt && <Grid xs={12} sm={6} item>
                    <Box component="span" className={classes.paragraph}>
                        Updated on {new Date(updatedAt).toDateString()}
                    </Box>
                </Grid>}
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <Box spacing={1} className={classes.criteria}>
                    {language && <Box>
                        <Box component="span" className={classes.logoContainer}>
                            <FiberManualRecordIcon variant="small" className={classes.logoSize}/>
                        </Box>
                        <Box component="span" className={classes.paragraph}>
                            {language}
                        </Box>
                    </Box>}
                    <Box>
                        <Box component="span" className={classes.logoContainer}>
                            <StarLogo variant="small" className={classes.logoSize}/>
                        </Box>
                        <Box component="span" className={classes.paragraph}>
                            {starsCount}
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );

    return (
        <Box className={classes.container} onClick={onClick}>
            <Box className={repository === name ? classes["root@selected"] : classes.root}>
                {aside ? asideDesign : pageDesign}
            </Box>
        </Box>
    )
};

RepositoryCard.defaultProps = {
    aside: false
};

export default RepositoryCard;