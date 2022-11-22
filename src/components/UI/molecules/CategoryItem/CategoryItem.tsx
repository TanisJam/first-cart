import { useMemo } from "react";
import useGetCategories from "@Utils/hooks/useGetCategories";
import { useAppSelector, useAppDispatch } from "@Store/hooks";
import {
  setCategory,
  setCategories,
} from "@Store/features/productsFilter/productsFilterSlice";
import CategoryActions from "@Molecules/CategoryActions";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import getRandomItem from "@Utils/functions/getRandomItem";
import capitalizeString from "@Utils/functions/capitalizeString";
import {
  sxCategoryImage,
  sxCategoryName,
  sxCategoryContainer,
} from "./CategoryItem.styles";

type Props = {
  name: string;
  images: string[];
};

export default function CategoryItem({ name, images }: Props) {
  const dispatch = useAppDispatch();
  const allCategories = useGetCategories();
  const currentCategories = useAppSelector(
    (state) => state.productsFilter.categories
  );
  const isActive = currentCategories.includes(name);
  const isSolo = currentCategories.length === 1 && isActive;
  const randomImage = useMemo(() => getRandomItem(images), [images]);
  const toggleCategorySelect = () => dispatch(setCategory(name));
  const toggleCategorySoloSelect = () =>
    isSolo
      ? dispatch(setCategories(allCategories))
      : dispatch(setCategories([name]));

  return (
    <Card sx={sxCategoryContainer(isActive)}>
      <CardMedia
        component="img"
        image={randomImage}
        alt={name}
        sx={sxCategoryImage}
      />
      <CategoryActions
        {...{
          isSolo,
          isActive,
          toggleCategorySoloSelect,
          toggleCategorySelect,
        }}
      />
      <Typography component="h5" sx={sxCategoryName}>
        {capitalizeString(name)}
      </Typography>
    </Card>
  );
}
