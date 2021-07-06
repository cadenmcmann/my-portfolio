import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import PersonIcon from "@material-ui/icons/Person";
import CodeIcon from "@material-ui/icons/Code";
import EmailIcon from "@material-ui/icons/Email";

import avatar from "../images/avatar.JPG";

import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@material-ui/core";
import Home from "@material-ui/icons/Home";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    flexGrow: 1,
    backgroundColor: "black",
    color: "#F3F3F3",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(15),
  },
  sidebar: {
    flexGrow: 1,
    width: 250,
    backgroundColor: "black",
  },
  sidebarOption: {
    color: "#F3F3F3",
  },
}));

const sidebarOptions = [
  { icon: <Home />, text: "Home", toRoute: "/" },
  { icon: <PersonIcon />, text: "About Me", toRoute: "/about" },
  { icon: <CodeIcon />, text: "Portfolio", toRoute: "/portfolio" },
  { icon: <EmailIcon />, text: "Contact", toRoute: "/contact" },
];

const NavBar = () => {
  const classes = useStyles();

  const [sideBarOpen, setSideBarOpen] = useState(false);

  const showSidebar = () => {
    return (
      <Box className={classes.sidebar}>
        <List>
          <Avatar className={classes.avatar} src={avatar} alt="Caden McMann" />
          <Divider />
          {sidebarOptions.map((option) => (
            <ListItem
              button
              className={classes.sidebarOption}
              component={Link}
              onClick={() => setSideBarOpen(false)}
              to={option.toRoute}
            >
              <ListItemIcon className={classes.sidebarOption}>
                {option.icon}
              </ListItemIcon>
              <ListItemText>{option.text}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="sticky">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => setSideBarOpen(!sideBarOpen)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Nav
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={sideBarOpen}
        onClose={() => setSideBarOpen(false)}
      >
        {showSidebar()}
      </Drawer>
    </div>
  );
};

export default NavBar;
