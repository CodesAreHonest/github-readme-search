import React            from "react";
import Drawer           from "@material-ui/core/Drawer";
import Hidden           from "@material-ui/core/Hidden";
import makeStyles       from "@material-ui/core/styles/makeStyles"
import useTheme         from "@material-ui/core/styles/useTheme";
import Toolbar          from "@material-ui/core/Toolbar";
import SidebarContainer from "../../containers/SidebarContainer";

const drawerWidth = 400;
const useStyles = makeStyles(theme => {
    return {
        drawer     : {
            [theme.breakpoints.up('sm')]: {
                width     : drawerWidth,
                flexShrink: 0,
            },
        },
        drawerPaper: {
            width     : drawerWidth,
            background: "#212121 !important",
            border    : "none"
        }
    }
});

const Sidebar = ({ open, onDrawerClose }) => {

    const classes = useStyles();
    const theme = useTheme();

    const drawerContent = (
        <div>123</div>
    );

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
                    <SidebarContainer/>
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
                    <SidebarContainer/>
                </Drawer>
            </Hidden>
        </nav>
    );
};

export default Sidebar;