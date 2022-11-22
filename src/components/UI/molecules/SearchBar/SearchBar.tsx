import { useRef } from "react";
import { useAppSelector, useAppDispatch } from "@Store/hooks";
import { setSearchQuery } from "@Store/features/productsFilter/productsFilterSlice";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
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

  return (
    <Paper component="form" sx={sxSearchBar}>
      <InputBase
        sx={{ ml: 2, flex: 1 }}
        placeholder="Search"
        inputProps={{ "aria-label": "search" }}
        inputRef={inputRef}
        value={searchQuery}
        onChange={handleSearch}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchOutlinedIcon />
      </IconButton>
    </Paper>
  );
}
