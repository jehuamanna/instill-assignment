import React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import { useMediaQuery } from "usehooks-ts";

const SearchBar = () => {
  const matches = useMediaQuery("(min-width: 480px)");
  return (
    <>
      <Input
        sx={{
          m: "auto 50px auto 30px",
          maxWidth: matches ? "212px" : "200px",
          width: "100%",
          borderRadius: "3px",
          boxShadow:
            "0px 0px 2px 1px rgb(0 0 0 / 20%), 0px 1px 5px 0 rgb(0 0 0 / 19%)",
        }}
        placeholder="Search"
        id="input-with-icon-adornment"
        disableUnderline
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon sx={{ padding: "6px", color: "#5F6D7E" }} />
          </InputAdornment>
        }
      />
    </>
  );
};

export default SearchBar;
