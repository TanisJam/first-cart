import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { sxCategoryImage, sxCategoryName, sxCategoryContainer } from "./CategoryItem.styles"

type Props = {
  active?: boolean
}

export default function CategoryItem({ active }: Props) {
  return (
    <Card sx={sxCategoryContainer(active)}>
      <CardMedia
        component="img"
        image="/images/c.jpg"
        alt="ring"
        sx={sxCategoryImage}
      />
      <Typography component="h5" sx={sxCategoryName}>Women's Clothing</Typography>
    </Card>
  )
}