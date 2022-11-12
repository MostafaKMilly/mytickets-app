import React from "react";
import {
  Drawer,
  IconButton,
  styled,
  Theme,
  Typography,
  useMediaQuery,
  ListItem,
  ListItemButton as MUIListItemButton,
  ListItemIcon,
  ListItemText,
  List,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useProjectsNavLinks } from "../hooks";
import { useLocation, useNavigate } from "react-router-dom";

export const AppDrawer = ({ open, toggleDrawer }: AppDrawerProps) => {
  const matches = useMediaQuery<Theme>((theme) => theme.breakpoints.up("sm"));
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const navs = useProjectsNavLinks();

  const toLink = (link: string) => {
    navigate(link);
    if (!matches) {
      toggleDrawer?.();
    }
  };

  return (
    <Drawer
      sx={{
        width: matches ? 270 : "100%",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: matches ? 270 : "100%",
          boxSizing: "border-box",
        },
      }}
      variant={matches ? "persistent" : "temporary"}
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <IconButton
          onClick={toggleDrawer}
          sx={{
            display: {
              xs: "inline-flex",
              sm: "none",
            },
          }}
        >
          <CloseIcon />
        </IconButton>
        <Typography>Project 1</Typography>
      </DrawerHeader>
      <List
        sx={{
          px: 2,
          rowGap: 2,
          display: "flex",
          flexDirection: "column",
          mt: 1,
          height: "100%",
        }}
      >
        {navs.map((nav) => (
          <ListItem
            key={nav.link}
            disablePadding
            sx={{
              ...nav.styles,
            }}
          >
            <ListItemButton
              disableRipple
              onClick={() => toLink(nav.link)}
              active={pathname === nav.link}
            >
              <ListItemIcon
                color="#241D1D"
                sx={{
                  "& svg": {
                    color: "#241D1D",
                  },
                }}
              >
                {nav.icon}
              </ListItemIcon>
              <ListItemText color="#241D1D">{nav.label}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2, 2.5),
  ...theme.mixins.toolbar,
  justifyContent: "space-between",
  borderBottom: `1px solid ${theme.palette.secondary.main}`,
}));

const ListItemButton = styled(MUIListItemButton, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active: boolean }>(({ active }) => ({
  backgroundColor: active ? "#ab31d638" : "#f8f8f8",
  borderRadius: 13,
  "&:hover": {
    backgroundColor: active ? "#ab31d638" : "#f8f8f8",
  },
}));

type AppDrawerProps = {
  open: boolean;
  toggleDrawer?: () => void;
};
