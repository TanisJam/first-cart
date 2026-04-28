import { useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useGetProductsQuery } from "@Store/services/products";
import { useAppSelector } from "@Store/hooks";
import CartHeader from "@Molecules/CartHeader";
import CartFooter from "@Molecules/CartFooter";
import CartItem from "@Organisms/CartItem";

type Props = {
  toggleCart: () => void;
};

export default function Cart({ toggleCart }: Props) {
  const { data, isLoading, isError } = useGetProductsQuery();
  const items = useAppSelector((state) => state.cart.items);

  const totalItems = useMemo(
    () => items.reduce((acc, i) => acc + i.quantity, 0),
    [items]
  );

  const isEmpty = isError || isLoading || items.length === 0;

  return (
    <Box
      sx={{
        width: { xs: "100vw", sm: 480 },
        maxWidth: "100vw",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "background.paper",
      }}
    >
      <CartHeader toggleCart={toggleCart} itemCount={totalItems} />

      <Box sx={{ flex: 1, overflowY: "auto", px: 3 }}>
        {isEmpty ? (
          <EmptyCart onContinue={toggleCart} />
        ) : (
          <AnimatePresence initial={false}>
            {items.map((item) => {
              const product = data?.find((p) => p.id === item.id);
              if (!product) return null;
              return (
                <CartItem
                  key={item.id}
                  {...product}
                  quantity={item.quantity}
                />
              );
            })}
          </AnimatePresence>
        )}
      </Box>

      {!isEmpty && <CartFooter onContinue={toggleCart} />}
    </Box>
  );
}

function EmptyCart({ onContinue }: { onContinue: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.05 }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        height: "100%",
        gap: 16,
        paddingTop: 32,
        paddingBottom: 32,
      }}
    >
      <Box
        sx={{
          width: 72,
          height: 72,
          borderRadius: "50%",
          backgroundColor: "background.subtle",
          display: "grid",
          placeItems: "center",
          color: "text.secondary",
        }}
      >
        <ShoppingBagOutlinedIcon sx={{ fontSize: 32 }} />
      </Box>
      <Box>
        <Typography variant="h6" sx={{ mb: 0.5 }}>
          Your cart is empty
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary", maxWidth: 280 }}>
          Browse the catalog and add a few things — the volume discount kicks in
          automatically.
        </Typography>
      </Box>
      <Button variant="contained" color="primary" onClick={onContinue}>
        Browse products
      </Button>
    </motion.div>
  );
}
