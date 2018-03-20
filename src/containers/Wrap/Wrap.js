// @flow
import React, { Component, type Node } from 'react';
import { Meals } from 'containers';
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
import { LocalDining, Schedule, Menu } from 'material-ui-icons';
import { Link, Route } from 'react-router-dom';

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
  toolbar: theme.mixins.toolbar,
  main: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    minWidth: 0,
  },
  root: {
      flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  }
});

class Wrap extends Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Menu"
              className={classes.navIconHide}
            >
              <Menu />
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
            <ListItem button component={Link} to="/meals">
              <ListItemIcon>
                <LocalDining />
              </ListItemIcon>
              <ListItemText primary="Meals" />
            </ListItem>
            <ListItem button component="a" href="#simple-list">
              <ListItemIcon>
                <Schedule />
              </ListItemIcon>
              <ListItemText primary="Schedule" />
            </ListItem>
          </List>
        </Drawer>
        <main className={classes.main}>
          <div className={classes.toolbar} />
          <Route exact path="/meals" component={Meals} />
          sdfsd
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Wrap);
