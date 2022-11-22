import { useMemo } from "react";
import useGetCategories from "@Utils/hooks/useGetCategories";
import { useAppSelector, useAppDispatch } from "@Store/hooks";
import {
  setCategory,
  setCategories,
} from "@Store/features/productsFilter/productsFilterSlice";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import getRandomItem from "@Utils/functions/getRandomItem";
import capitalizeString from "@Utils/functions/capitalizeString";
import {
  sxCategoryImage,
  sxCategoryName,
  sxCategoryContainer,
} from "./CategoryItem.styles";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";

type Props = {
  name: string;
  images: string[];
};

export default function CategoryItem({ name, images }: Props) {
  const dispatch = useAppDispatch();
  const allCategories = useGetCategories();
  const categories = useAppSelector((state) => state.productsFilter.categories);
  const active = categories.includes(name);
  const solo = categories.length === 1 && active;
  const randomImage = useMemo(() => getRandomItem(images), [images]);

  const handleCategorySelect = () => {
    dispatch(setCategory(name));
  };
  const handleCategorySoloSelect = () => {
    if (solo) {
      dispatch(setCategories(allCategories));
    } else {
      dispatch(setCategories([name]));
    }
  };

  return (
    <Card sx={sxCategoryContainer(active)}>
      <CardMedia
        component="img"
        image={randomImage}
        alt={name}
        sx={sxCategoryImage}
      />
      <Box>
        <IconButton onClick={handleCategorySoloSelect}>
          {solo ? <MyLocationIcon /> : <LocationSearchingIcon />}
        </IconButton>
        <IconButton onClick={handleCategorySelect}>
          {active ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </IconButton>
      </Box>
      <Typography component="h5" sx={sxCategoryName}>
        {capitalizeString(name)}
      </Typography>
    </Card>
  );
}
