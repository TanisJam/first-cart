import { useMemo } from 'react';
import { useAppSelector, useAppDispatch } from '@Store/hooks';
import { setCategory } from "@Store/features/productsFilter/productsFilterSlice";
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import getRandomItem from "@Utils/getRandomItem"
import capitalizeString from "@Utils/capitalizeString"
import {
  sxCategoryImage,
  sxCategoryName,
  sxCategoryContainer
} from "./CategoryItem.styles"

type Props = {
  name: string,
  images: string[],
}

export default function CategoryItem({ name, images }: Props) {
  const dispatch = useAppDispatch();
  const active = useAppSelector((state) => state.productsFilter.categories.includes(name));
  const randomImage = useMemo(() => getRandomItem(images), [images]);

  const handleCategorySelect = () => {
    dispatch(setCategory(name));
  };

  return (
    <Card sx={sxCategoryContainer(active)}
      onClick={handleCategorySelect}
    >
      <CardMedia
        component="img"
        image={randomImage}
        alt={name}
        sx={sxCategoryImage}
      />
      {active ? <VisibilityIcon /> : <VisibilityOffIcon />}
      <Typography component="h5" sx={sxCategoryName}>
        {capitalizeString(name)}
      </Typography>
    </Card>
  )
}