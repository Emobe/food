// @flow
import React, { Component, type Node } from 'react';
import AppBar from 'material-ui/AppBar';
import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles
} from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import Toolbar from 'material-ui/Toolbar';
import Drawer from 'material-ui/Drawer';
import MenuIcon from 'material-ui-icons/Menu';

type Props = {
  children: Node
};

const styles = theme => ({
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawerPaper: {
    position: 'relative',
    width: 240
  },
  toolbar: theme.mixins.toolbar
});

class Wrap extends Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Menu"
              className={classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title">Meal Manager</Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.toolbar} />
          <List component="nav">
            <ListItem button component="a" href="/meals">
              <ListItemText primary="Meals" />
            </ListItem>
            <ListItem button component="a" href="#simple-list">
              <ListItemText primary="Schedule" />
            </ListItem>
          </List>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Wrap);
