import { useMemo, useRef } from "react";
import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useAppSelector } from "@Store/hooks";
import { useGetProductsQuery } from "@Store/services/products";
import Error from "@Molecules/Error";
import Hero from "@Organisms/Hero";
import FilterBar from "@Organisms/FilterBar";
import ProductCard from "@Organisms/ProductCard";
import SkeletonCard from "@Molecules/SkeletonCard";
import { sxCardsBox } from "./CardsContainer.styles";
import type { Product } from "@Types/product";

const sortProducts = (
  list: Product[],
  sortBy: "featured" | "price-asc" | "price-desc" | "rating"
): Product[] => {
  switch (sortBy) {
    case "price-asc":
      return [...list].sort((a, b) => a.price - b.price);
    case "price-desc":
      return [...list].sort((a, b) => b.price - a.price);
    case "rating":
      return [...list].sort((a, b) => b.rating.rate - a.rating.rate);
    case "featured":
    default:
      return list;
  }
};

export default function CardsContainer() {
  const { data, isLoading, isError } = useGetProductsQuery();
  const { categories, searchQuery, sortBy } = useAppSelector(
    (state) => state.productsFilter
  );
  const gridRef = useRef<HTMLDivElement>(null);

  const products = useMemo(() => {
    if (!data) return [];
    const filtered = data.filter((product) => {
      const isCategoryMatch =
        categories.length === 0 || categories.includes(product.category);
      const isSearchMatch = product.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return isCategoryMatch && isSearchMatch;
    });
    return sortProducts(filtered, sortBy);
  }, [data, categories, searchQuery, sortBy]);

  if (isError) return <Error />;

  return (
    <>
      <Hero
        products={data ?? []}
        onShopAll={() =>
          gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      />

      <Box ref={gridRef} sx={{ scrollMarginTop: 96 }}>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h3" sx={{ mb: 0.5 }}>
            All products
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            Hand-picked. Volume discounts apply automatically.
          </Typography>
        </Box>

        <FilterBar resultCount={products.length} />

        {isLoading ? (
          <Box sx={sxCardsBox}>
            {[...Array(8)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </Box>
        ) : products.length === 0 ? (
          <EmptyResults />
        ) : (
          <Box sx={sxCardsBox}>
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.32,
                  delay: Math.min(i * 0.03, 0.24),
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </Box>
        )}
      </Box>
    </>
  );
}

function EmptyResults() {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: 10,
        border: "1px dashed",
        borderColor: "divider",
        borderRadius: 3,
        backgroundColor: "background.paper",
      }}
    >
      <Typography variant="h5" sx={{ mb: 1 }}>
        No products found
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        Try a different search term or category.
      </Typography>
    </Box>
  );
}
