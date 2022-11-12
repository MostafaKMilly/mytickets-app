import React from "react";
import {
  Drawer,
  IconButton,
  styled,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2, 2),
  ...theme.mixins.toolbar,
  justifyContent: "space-between",
  borderBottom: `1px solid ${theme.palette.secondary.main}`,
}));

export const AppDrawer = ({ open , toggleDrawer }: AppDrawerProps) => {
  const matches = useMediaQuery<Theme>((theme) => theme.breakpoints.up("sm"));

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
        <IconButton onClick={toggleDrawer} sx={{
          display : {
            xs : "inline-flex",
            sm : "none"
          }
        }}>
          <CloseIcon />
        </IconButton>
        <Typography>Project 1</Typography>
      </DrawerHeader>
    </Drawer>
  );
};

type AppDrawerProps = {
  open: boolean;
  toggleDrawer?: () => void;
};
