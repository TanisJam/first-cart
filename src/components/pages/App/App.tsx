import Main from "@Templates/Main"
import ProductCard from "@Organisms/ProductCard"
import Box from "@mui/material/Box"
import { sxProductsBox } from "./App.styles"
import { useGetProductsQuery } from "@Redux/services/products"

function App() {
  const { data, isLoading, isError } = useGetProductsQuery()

  return (
    <Main>
      <Box sx={sxProductsBox}>
        {isLoading && <p>Loading...</p>}
        {data?.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </Box>
    </Main>
  )
}

export default App
