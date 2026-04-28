import { useRef, useState } from "react";
import { useAppSelector, useAppDispatch } from "@Store/hooks";
import { setSearchQuery } from "@Store/features/productsFilter/productsFilterSlice";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  /** When true, the input takes the full available width (used in the navbar). */
  expand?: boolean;
};

export default function SearchBar({ expand = true }: Props) {
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const [focused, setFocused] = useState(false);

  const searchQuery = useAppSelector(
    (state) => state.productsFilter.searchQuery
  );

  const handleChange = () => {
    if (inputRef.current) dispatch(setSearchQuery(inputRef.current.value));
  };
  const handleClear = () => {
    if (inputRef.current) inputRef.current.value = "";
    dispatch(setSearchQuery(""));
    inputRef.current?.focus();
  };

  return (
    <Box
      component="form"
      role="search"
      onSubmit={(e) => e.preventDefault()}
      sx={{
        display: "flex",
        alignItems: "center",
        width: expand ? "100%" : 320,
        maxWidth: 480,
        height: 42,
        px: 1.25,
        gap: 1,
        backgroundColor: "background.subtle",
        border: "1px solid",
        borderColor: focused ? "primary.main" : "transparent",
        boxShadow: focused
          ? "0 0 0 4px rgba(91, 91, 214, 0.12)"
          : "none",
        borderRadius: 999,
        transition: "border-color 160ms ease, box-shadow 160ms ease, background-color 160ms ease",
      }}
    >
      <SearchIcon sx={{ fontSize: 18, color: "text.secondary" }} />
      <InputBase
        sx={{ flex: 1, fontSize: "0.9375rem" }}
        placeholder="Search products"
        inputProps={{ "aria-label": "Search products" }}
        inputRef={inputRef}
        value={searchQuery}
        onChange={handleChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <AnimatePresence>
        {searchQuery && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.12 }}
          >
            <IconButton
              size="small"
              onClick={handleClear}
              aria-label="Clear search"
              sx={{
                width: 26,
                height: 26,
                color: "text.secondary",
                "&:hover": { color: "secondary.main" },
              }}
            >
              <CloseRoundedIcon sx={{ fontSize: 16 }} />
            </IconButton>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
}
