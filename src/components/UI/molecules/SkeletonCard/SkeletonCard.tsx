import Box from "@mui/material/Box"
import Skeleton from "@mui/material/Skeleton"
import { sxSkeletonCard, sxSkeletonImage, sxSkeletonMain, sxSkeletonFooter } from "./SkeletonCard.styles"

export default function SkeletonCard() {
  return (
    <Box sx={sxSkeletonCard} >
      <Skeleton variant="rectangular" sx={sxSkeletonImage} />
      <Box sx={sxSkeletonMain} >
        <Skeleton width={"90%"} />
        <Skeleton width={"85%"} />
        <Skeleton width={"60%"} />
        <Skeleton width={"30%"} />
      </Box>
      <Box sx={sxSkeletonFooter} >
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </Box>
    </Box>
  )
}