import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import getRandomItem from "@Utils/getRandomItem"
import capitalizeString from "@Utils/capitalizeString"
import {
  sxCategoryImage,
  sxCategoryName,
  sxCategoryContainer
} from "./CategoryItem.styles"

type Props = {
  active?: boolean,
  name: string,
  images: string[],
}

export default function CategoryItem({ active, name, images }: Props) {

  return (
    <Card sx={sxCategoryContainer(active)}>
      <CardMedia
        component="img"
        image={getRandomItem(images)}
        alt={name}
        sx={sxCategoryImage}
      />
      <Typography component="h5" sx={sxCategoryName}>
        {capitalizeString(name)}
      </Typography>
    </Card>
  )
}