import { useRef } from "react";
import { useAppSelector, useAppDispatch } from "@Store/hooks";
import { setSearchQuery } from "@Store/features/productsFilter/productsFilterSlice";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { sxSearchBar } from "./SearchBar.styles";

export default function SearchBar() {
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const searchQuery = useAppSelector(
    (state) => state.productsFilter.searchQuery
  );

  const handleSearch = () => {
    if (inputRef.current) {
      dispatch(setSearchQuery(inputRef.current.value));
    }
  };
  const handleClear = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      dispatch(setSearchQuery(""));
    }
  };

  return (
    <Paper component="form" sx={sxSearchBar}>
      <IconButton sx={{ p: "10px" }} aria-label="clear" onClick={handleClear}>
        <RestartAltIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 2, flex: 1 }}
        placeholder="Search"
        inputProps={{ "aria-label": "search" }}
        inputRef={inputRef}
        value={searchQuery}
        onChange={handleSearch}
      />
      <Box sx={{ p: "10px" }} color="neutral.main">
        <SearchOutlinedIcon />
      </Box>
    </Paper>
  );
}
