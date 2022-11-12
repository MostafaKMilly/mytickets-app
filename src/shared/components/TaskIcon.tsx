import React from "react";
import { Box, BoxProps } from "@mui/material";

export const TaskIcon = ({ type, ...props }: Props) => {
  const iconTypes: Record<Props["type"], string> = {
    bug: "/assets/images/bugIcon.svg",
    perfomance: "/assets/images/perfomanceIcon.svg",
    task: "/assets/images/ticketIcon.svg",
  };

  return (
    <Box
      role="img"
      component="img"
      height="35px"
      width="35px"
      {...props}
      src={iconTypes[type]}
    />
  );
};

type Props = Omit<BoxProps, "src"> & {
  type: "task" | "bug" | "perfomance";
};
