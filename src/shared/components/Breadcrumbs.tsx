import { Box, Typography } from "@mui/material";
import React from "react";
import { Params, useMatches } from "react-router-dom";

export const Breadcrumbs = () => {
  const matches = useMatches() as matchItem[];
  const crumbs = matches
    .filter((match) => Boolean(match.handle?.crumb))
    .map((match) => match.handle.crumb?.("project 1"));

  return (
    <Box display="flex" columnGap={2} mb={3} alignItems="center">
      {crumbs.map((crumb, index) => (
        <>
          <Box key={index}>{crumb}</Box>
          {index !== crumbs.length - 1 && <Typography color="primary.main">/</Typography>}
        </>
      ))}
    </Box>
  );
};

type matchItem = {
  id: string;
  pathname: string;
  params: Params<string>;
  data: unknown;
  handle: {
    crumb?: (props: any) => React.ReactNode;
  };
};
