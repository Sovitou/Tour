import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function CircularIndeterminate() {
  return (
    <Box className="flex justify-center">
      <CircularProgress />
    </Box>
  );
}
