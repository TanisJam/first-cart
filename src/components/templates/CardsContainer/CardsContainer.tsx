import { useMemo } from 'react';
import { useAppSelector } from "@Store/hooks";
import { useGetProductsQuery } from "@Store/services/products";
import Error from "@Molecules/Error/Error";
import ProductCard from "@Organisms/ProductCard";
import SkeletonCard from "@Molecules/SkeletonCard";
import Box from "@mui/material/Box";
import { sxCardsBox } from "./CardsContainer.styles";

export default function CardsContainer() {
  const { data, isLoading, isError } = useGetProductsQuery();
  const { categories, search } = useAppSelector((state) => state.productsFilter);

  const products = useMemo(() => {
    if (!data) return [];
    return data.filter((product) => {
      const isCategoryMatch = categories.includes(product.category);
      const isSearchMatch = product.title.toLowerCase().includes(search.toLowerCase());
      return isCategoryMatch && isSearchMatch;
    });
  }, [data, categories, search]);

  if (isError) return <Error />;

  if (isLoading)
    return (
      <Box sx={sxCardsBox}>
        {[...Array(6)].map((value: undefined, index: number) => (
          <SkeletonCard key={index} />
        ))}
      </Box>
    );

  return (
    <Box sx={sxCardsBox}>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </Box>
  );
}
