import React from "react";
import { Link } from "react-router-dom";

import drawer from "../../styles/Drawer.module.scss";

import Title from "../Title/Title";

import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { ReactComponent as EarthSvg } from "../../images/svgIcons/earthSvg.svg";
import { ReactComponent as Astronaut } from "../../images/svgIcons/astronaut.svg";
import { ReactComponent as Email } from "../../images/svgIcons/email.svg";
import { ReactComponent as Game } from "../../images/svgIcons/game.svg";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{ display: "flex", flexDirection: "row" }}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <EarthSvg />
            </ListItemIcon>
            <Link className={drawer.a_link} to="/projects">
              <ListItemText>Projects</ListItemText>
            </Link>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Astronaut />
            </ListItemIcon>
            <Link className={drawer.a_link} to="/aboutMe">
              <ListItemText>About Me</ListItemText>
            </Link>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Email />
            </ListItemIcon>
            <Link className={drawer.a_link} to="/contacts">
              <ListItemText>Send Email</ListItemText>
            </Link>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Game />
            </ListItemIcon>
            <Link className={drawer.a_link} to="/games">
              <ListItemText>Games</ListItemText>
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            className={drawer.button}
            onClick={toggleDrawer(anchor, true)}
          >
            <Title />
          </Button>
          <div
            className={drawer.paper}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
