import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import CheckIcon from "@mui/icons-material/Check";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useAppDispatch, useAppSelector } from "@Store/hooks";
import {
  setCategories,
  setSortBy,
  SortBy,
} from "@Store/features/productsFilter/productsFilterSlice";
import useGetCategories from "@Utils/hooks/useGetCategories";
import { useGetProductsQuery } from "@Store/services/products";
import capitalizeString from "@Utils/functions/capitalizeString";

const SORT_OPTIONS: { value: SortBy; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top rated" },
];

type Props = {
  resultCount: number;
};

export default function FilterBar({ resultCount }: Props) {
  const dispatch = useAppDispatch();
  const { data } = useGetProductsQuery();
  const allCategories = useGetCategories();
  const selected = useAppSelector((state) => state.productsFilter.categories);
  const sortBy = useAppSelector((state) => state.productsFilter.sortBy);

  // Hydrate selected categories with the full set on first load.
  useEffect(() => {
    if (data && selected.length === 0) {
      dispatch(setCategories(allCategories));
    }
  }, [data, allCategories, selected.length, dispatch]);

  const isAll = useMemo(
    () => selected.length === allCategories.length,
    [selected.length, allCategories.length]
  );

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const sortLabel =
    SORT_OPTIONS.find((o) => o.value === sortBy)?.label ?? "Sort";

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "stretch", md: "center" },
        justifyContent: "space-between",
        gap: 2,
        mb: 3,
      }}
    >
      <Box
        className="scroll-x-clean"
        sx={{
          display: "flex",
          gap: 1,
          overflowX: "auto",
          flex: 1,
          minWidth: 0,
          py: 0.5,
        }}
      >
        <Pill
          active={isAll}
          onClick={() => dispatch(setCategories(allCategories))}
        >
          All
        </Pill>
        {allCategories.map((c) => {
          const active = !isAll && selected.length === 1 && selected[0] === c;
          return (
            <Pill key={c} active={active} onClick={() => dispatch(setCategories([c]))}>
              {capitalizeString(c)}
            </Pill>
          );
        })}
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          justifyContent: { xs: "space-between", md: "flex-end" },
          flexShrink: 0,
        }}
      >
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          <Box component="span" sx={{ color: "text.primary", fontWeight: 600 }}>
            {resultCount}
          </Box>{" "}
          {resultCount === 1 ? "product" : "products"}
        </Typography>
        <Button
          variant="outlined"
          size="small"
          endIcon={<KeyboardArrowDownIcon />}
          onClick={(e) => setAnchorEl(e.currentTarget)}
          sx={{ minWidth: 140, justifyContent: "space-between" }}
        >
          {sortLabel}
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          PaperProps={{ sx: { mt: 1, minWidth: 200, borderRadius: 2 } }}
        >
          {SORT_OPTIONS.map((opt) => (
            <MenuItem
              key={opt.value}
              selected={opt.value === sortBy}
              onClick={() => {
                dispatch(setSortBy(opt.value));
                setAnchorEl(null);
              }}
              sx={{ fontSize: "0.875rem" }}
            >
              <ListItemText>{opt.label}</ListItemText>
              {opt.value === sortBy && (
                <CheckIcon sx={{ fontSize: 16, color: "primary.main", ml: 1 }} />
              )}
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Box>
  );
}

/** Pill toggle. Animated background for selected state via layoutId. */
function Pill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Box
      component="button"
      type="button"
      onClick={onClick}
      sx={{
        position: "relative",
        flexShrink: 0,
        height: 34,
        px: 1.75,
        borderRadius: 999,
        border: "1px solid",
        borderColor: active ? "transparent" : "divider",
        backgroundColor: active ? "transparent" : "background.paper",
        color: active ? "#fff" : "text.primary",
        fontSize: "0.8125rem",
        fontWeight: 600,
        cursor: "pointer",
        fontFamily: "inherit",
        transition: "color 200ms ease, border-color 200ms ease",
        "&:hover": { borderColor: active ? "transparent" : "#D4D4D8" },
      }}
    >
      <AnimatePresence>
        {active && (
          <motion.span
            layoutId="filter-pill-active"
            transition={{ type: "spring", stiffness: 500, damping: 36 }}
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: 999,
              background: "#18181B",
              zIndex: 0,
            }}
          />
        )}
      </AnimatePresence>
      <Box component="span" sx={{ position: "relative", zIndex: 1 }}>
        {children}
      </Box>
    </Box>
  );
}
