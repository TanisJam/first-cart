import { useGetProductsQuery } from "@Redux/services/products"
import ProductCard from '@Organisms/ProductCard';
import SkeletonCard from '@Molecules/SkeletonCard';
import Box from '@mui/material/Box';
import { sxCardsBox } from './CardsContainer.styles';


export default function CardsContainer() {

  const { data, isLoading, isError } = useGetProductsQuery()

  console.log({ data, isLoading, isError })

  if (isLoading) {
    return (
      <Box sx={sxCardsBox}>
        {[...Array(6)].map(
          (value: undefined, index: number) => (
            <SkeletonCard key={index} />
          )
        )}
      </Box>
    )
  }


  if (isError) (
    <Box sx={sxCardsBox}>
      <h1>Error</h1>
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