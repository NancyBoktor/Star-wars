import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";

export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        opacity: 0.5,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress />
    </div>
  );
}
