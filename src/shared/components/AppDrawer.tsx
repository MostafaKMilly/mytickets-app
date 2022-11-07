import React from "react";
import { Drawer, styled } from "@mui/material";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export const AppDrawer = ({ open }: AppDrawerProps) => {
  return (
    <Drawer
      sx={{
        width: 270,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 270,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>Drawer</DrawerHeader>
    </Drawer>
  );
};

type AppDrawerProps = {
  open: boolean;
};
