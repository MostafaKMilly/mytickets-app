import React from "react";
import { Box } from "@mui/material";

export const TaskIcon = ({ type }: Props) => {
  const iconTypes: Record<Props["type"], string> = {
    bug: "assets/images/bugIcon.svg",
    perfomance: "assets/images/perfomanceIcon.svg",
    task: "assets/images/ticketIcon.svg",
  };

  return (
    <Box
      role="img"
      component="img"
      height="35px"
      width="35px"
      src={iconTypes[type]}
    />
  );
};

type Props = {
  type: "task" | "bug" | "perfomance";
};
