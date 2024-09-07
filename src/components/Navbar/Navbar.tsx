import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CallToAction from "../utils/CallToAction";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import { ListSubheader } from "@mui/material";

enum Nav {
  home,
  about,
  contact,
}
export default function Navbar() {
  const [active, setActive] = React.useState<Nav>(Nav.home);
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <div className="nav">
      <div className="flex w-full items-end justify-between md:justify-around">
        <div className="logo-container">
          <span className="logo"></span>
        </div>

        <ul className="nav--links hidden mx-auto md:flex">
          <li
            className={active === Nav.home ? "active" : ""}
            onClick={() => {
              setActive(Nav.home);
            }}
          >
            <a href="/#hero">Home</a>
          </li>
          <li
            className={active === Nav.about ? "active" : ""}
            onClick={() => {
              setActive(Nav.about);
            }}
          >
            <a href="#features">About</a>
          </li>

          <li
            className={active === Nav.contact ? "active" : ""}
            onClick={() => {
              setActive(Nav.contact);
            }}
          >
            <a href="#footer">Contact</a>
          </li>
        </ul>
        <div
          className="toggler ml-auto md:hidden"
          onClick={() => {
            setMenuOpen((p) => !p);
          }}
        >
          {menuOpen ? <MenuOpenIcon /> : <MenuIcon />}
        </div>
        <TemporaryDrawer open={menuOpen} setOpen={setMenuOpen} />
        <div className="hidden md:block">
          <CallToAction variant="outlined" text="Get Started" />
        </div>
      </div>
    </div>
  );
}

export function TemporaryDrawer({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Function;
}) {
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="Navigation" onClick={toggleDrawer(false)}>
      <List>
        <ListSubheader>Navigation</ListSubheader>
        <ListItem disablePadding color="secondary">
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding color="secondary">
          <a href="#features">

          <ListItemButton>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItemButton>
          </a>
        </ListItem>

        <ListItem disablePadding color="secondary">
          <ListItemButton>
            <ListItemIcon>
              <ContactPhoneIcon />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
