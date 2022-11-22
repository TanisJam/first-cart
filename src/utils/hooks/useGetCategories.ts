import { useMemo } from "react";
import { useGetProductsQuery } from "@Store/services/products";

function useGetCategories() {
  const { data } = useGetProductsQuery();
  const categories = useMemo(() => {
    if (!data) return [];
    const categories = data.map((product) => product.category);
    const uniqueCategories = [...new Set(categories)];
    return uniqueCategories;
  }, [data]);

  return categories;
}

export default useGetCategories;
