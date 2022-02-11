import * as React from "react";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { indigo } from "@mui/material/colors";

export default function Search({ onChange, value, onClick }) {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
        backgroundColor: indigo["300"],
        flexDirection: "row",
        justifyContent: "center",
        margin: "auto",
        marginTop: "50px",
        marginBottom: "60px",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search By ID"
        value={value}
        onChange={onChange}
      />
      <IconButton
        onClick={() => onClick(value)}
        sx={{ p: "10px" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
