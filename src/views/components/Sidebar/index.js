import React      from "react";
import Drawer     from "@material-ui/core/Drawer";
import Hidden     from "@material-ui/core/Hidden";
import makeStyles from "@material-ui/core/styles/makeStyles"
import useTheme   from "@material-ui/core/styles/useTheme";

const useStyles = makeStyles(theme => {
    return {
        drawer     : {
            [theme.breakpoints.up('sm')]: {
                width     : props => props.width,
                flexShrink: 0,
            },
        },
        drawerPaper: {
            width     : props => props.width,
            background: "#212121 !important",
            border    : "none"
        }
    }
});

const Sidebar = ({ open, onDrawerClose, children, width }) => {

    const classes = useStyles({ width });
    const theme = useTheme();

    return (
        <nav aria-label="sidebar">
            <Hidden smUp implementation="css">
                <Drawer
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={open}
                    onClose={onDrawerClose}
                    classes={{ paper: classes.drawerPaper }}
                    ModalProps={{ keepMounted: true }}
                    PaperProps={{ elevation: 5 }}
                >
                    {children}
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <Drawer
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    PaperProps={{ elevation: 5 }}
                    variant="permanent"
                    open
                >
                    {children}
                </Drawer>
            </Hidden>
        </nav>
    );
};

Sidebar.defaultProps = {
    width: 400
};

export default Sidebar;