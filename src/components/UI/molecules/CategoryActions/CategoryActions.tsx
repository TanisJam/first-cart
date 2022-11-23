import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Tooltip from "@mui/material/Tooltip";

type Props = {
  isSolo: boolean;
  isActive: boolean;
  toggleCategorySelect: () => void;
  toggleCategorySoloSelect: () => void;
};

export default function CategoryActions({
  isSolo,
  isActive,
  toggleCategorySoloSelect,
  toggleCategorySelect,
}: Props) {
  return (
    <Box>
      <Tooltip title="Show only this category">
        <IconButton onClick={toggleCategorySoloSelect}>
          {isSolo ? <MyLocationIcon /> : <LocationSearchingIcon />}
        </IconButton>
      </Tooltip>
      <Tooltip title="Show/hide this category">
        <IconButton onClick={toggleCategorySelect}>
          {isActive ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </IconButton>
      </Tooltip>
    </Box>
  );
}
