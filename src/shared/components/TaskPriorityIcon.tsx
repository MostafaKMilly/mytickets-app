import React from "react";
import { Box, BoxProps } from "@mui/material";

export const TaskPriorityIcon = ({ type, ...props }: Props) => {
  const iconTypes: Record<Props["type"], string> = {
    high: "/assets/images/highPriority.svg",
    low: "/assets/images/lowPriority.svg",
    medium: "/assets/images/medPriority.svg",
  };

  return (
    <Box
      role="img"
      component="img"
      height="20px"
      width="20px"
      {...props}
      src={iconTypes[type]}
    />
  );
};

type Props = Omit<BoxProps, "src"> & {
  type: "high" | "medium" | "low";
};
