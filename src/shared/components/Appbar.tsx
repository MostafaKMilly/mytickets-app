import React from "react";
import {
  AppBar as MuiAppBar,
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  Toolbar,
  useMediaQuery,
  Theme,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import Container from "./Container";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

export const AppBar = ({ toggleDrawer, drawer }: TProps) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { pathname } = useLocation();
  const [, route] = pathname.split("/");
  const idDrawerOpen = drawer && route === "projects";
  const matches = useMediaQuery<Theme>((theme) => theme.breakpoints.up("sm"));

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.clear();
    handleClose();
    navigate("/login");
  };

  return (
    <MuiAppBar
      position="fixed"
      color="inherit"
      elevation={0}
      sx={{
        width: "100%",
        ...(matches && {
          ml: "0px",
          ...(idDrawerOpen && {
            width: `calc(100% - 260px)`,
            ml: `260px`,
          }),
        }),
      }}
    >
      <Container>
        <Toolbar
          disableGutters
          variant="dense"
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Box display="flex" columnGap={2}>
            <IconButton
              edge="start"
              color="inherit"
              onClick={toggleDrawer}
              sx={{
                ...(route !== "projects" && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Logo
              width="40px"
              height="40px"
              onClick={() => navigate("/")}
              sx={{ cursor: "pointer" }}
            />
          </Box>
          <Box display="flex" columnGap={4} alignItems="center">
            <TextField
              variant="outlined"
              color="secondary"
              size="small"
              placeholder="Search for ticket"
              InputProps={{
                startAdornment: <SearchIcon />,
              }}
              sx={{
                display: {
                  xs: "none",
                  sm: "flex",
                },
              }}
            />
            <IconButton onClick={handleClick} size="small">
              <Avatar
                sx={{ width: "48px", height: "48px" }}
                src={"/assets/images/Avatar.png"}
              />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              elevation={0}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
};

type TProps = {
  toggleDrawer?: () => void;
  drawer?: boolean;
};
