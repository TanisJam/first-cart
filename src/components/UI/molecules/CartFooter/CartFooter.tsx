import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import useGetCartTotals from "@Utils/hooks/useGetCartTotals";
import formatNumber from "@Utils/functions/formatNumber";

type Props = {
  onContinue?: () => void;
};

export default function CartFooter({ onContinue }: Props) {
  const { total, totalWithDiscount } = useGetCartTotals();
  const savings = total - totalWithDiscount;

  return (
    <Box
      sx={{
        position: "sticky",
        bottom: 0,
        zIndex: 2,
        px: 3,
        pt: 2,
        pb: 2.5,
        backgroundColor: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 0.75, mb: 2 }}>
        <Row label="Subtotal" value={`$${formatNumber(total)}`} />
        {savings > 0 && (
          <Row
            label="Volume discount"
            value={`-$${formatNumber(savings)}`}
            accent
          />
        )}
        <Box sx={{ height: 1, backgroundColor: "divider", my: 0.75 }} />
        <Row
          label="Total"
          value={`$${formatNumber(totalWithDiscount)}`}
          emphasis
        />
      </Box>

      <Button
        fullWidth
        variant="contained"
        color="secondary"
        size="large"
        startIcon={<LockOutlinedIcon sx={{ fontSize: 16 }} />}
        sx={{ height: 48 }}
      >
        Checkout securely
      </Button>
      {onContinue && (
        <Button
          fullWidth
          variant="text"
          onClick={onContinue}
          sx={{ mt: 1, color: "text.secondary" }}
        >
          Continue shopping
        </Button>
      )}
    </Box>
  );
}

function Row({
  label,
  value,
  accent,
  emphasis,
}: {
  label: string;
  value: string;
  accent?: boolean;
  emphasis?: boolean;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
      }}
    >
      <Typography
        variant={emphasis ? "subtitle1" : "body2"}
        sx={{
          color: emphasis ? "secondary.main" : "text.secondary",
          fontWeight: emphasis ? 600 : 500,
        }}
      >
        {label}
      </Typography>
      <Typography
        variant={emphasis ? "h6" : "body2"}
        sx={{
          color: accent ? "primary.main" : "secondary.main",
          fontWeight: emphasis ? 700 : 600,
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {value}
      </Typography>
    </Box>
  );
}
