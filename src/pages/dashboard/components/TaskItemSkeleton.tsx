import React from "react";
import { Box, Skeleton } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";



export const TaskItemSkeleton = () => {
  return (
    <Box
      width="100%"
      display="flex"
      alignItems="baseline"
      justifyContent="space-between"
    >
      <Box display="flex" columnGap={1.5}>
        <Skeleton
          variant="rectangular"
          width="35px"
          height="35px"
          sx={{ borderRadius: "6px" }}
        />
        <Box>
          <Skeleton
            variant="text"
            width="214px"
            height="15px"
            sx={{ mb: "8px" }}
          />
          <Skeleton variant="text" width="92px" height="15px" />
        </Box>
      </Box>
      <Box display="flex" columnGap="24px" alignItems="center">
        <Skeleton
          variant="circular"
          height="40px"
          width="40px"
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        />
        <KeyboardArrowRightIcon sx={{ color: "#E9ECF1" }} />
      </Box>
    </Box>
  );
};
