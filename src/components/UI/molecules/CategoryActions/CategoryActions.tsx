import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

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
      <IconButton onClick={toggleCategorySoloSelect}>
        {isSolo ? <MyLocationIcon /> : <LocationSearchingIcon />}
      </IconButton>
      <IconButton onClick={toggleCategorySelect}>
        {isActive ? <VisibilityIcon /> : <VisibilityOffIcon />}
      </IconButton>
    </Box>
  );
}
