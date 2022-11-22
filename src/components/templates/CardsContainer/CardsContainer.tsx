import { useGetProductsQuery } from "@Store/services/products"
import SkeletonCard from '@Molecules/SkeletonCard';
import Error from "@Molecules/Error/Error";
import ProductCard from '@Organisms/ProductCard';
import Box from '@mui/material/Box';
import { sxCardsBox } from './CardsContainer.styles';


export default function CardsContainer() {
  const { data, isLoading, isError } = useGetProductsQuery()

  if (isError) return <Error />

  if (isLoading) return (
    <Box sx={sxCardsBox}>
      {[...Array(6)].map(
        (value: undefined, index: number) => (
          <SkeletonCard key={index} />
        )
      )}
    </Box>
  )

  return (
    <Box sx={sxCardsBox}>
      {data?.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </Box>
  )
}