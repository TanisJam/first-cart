import { useMemo } from "react";
import { useAppSelector } from "@Store/hooks";
import { useGetProductsQuery } from "@Store/services/products";
import getDiscountPercentage from "@Utils/functions/getDiscountPercentage";

export default function useGetCartTotals() {
  const { items } = useAppSelector((state) => state.cart);
  const { data } = useGetProductsQuery();

  const totals = useMemo(() => {
    return items.reduce(
      (acc, item) => {
        const product = data?.find((product) => product.id === item.id);
        if (!product) return acc;
        const total = acc.total + product.price * item.quantity;
        const totalWithDiscount =
          acc.totalWithDiscount +
          product.price *
            item.quantity *
            (1 - getDiscountPercentage(item.quantity));
        return { total, totalWithDiscount };
      },
      { total: 0, totalWithDiscount: 0 }
    );
  }, [items, data]);

  return totals;
}
