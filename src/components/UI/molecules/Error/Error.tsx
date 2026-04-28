import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";

export default function Error() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        py: 12,
        gap: 2,
      }}
    >
      <Box
        sx={{
          width: 64,
          height: 64,
          borderRadius: "50%",
          backgroundColor: "rgba(239,68,68,0.10)",
          color: "error.main",
          display: "grid",
          placeItems: "center",
        }}
      >
        <WarningAmberRoundedIcon sx={{ fontSize: 28 }} />
      </Box>
      <Typography variant="h4">Something went wrong</Typography>
      <Typography
        variant="body1"
        sx={{ color: "text.secondary", maxWidth: 420 }}
      >
        We couldn't load the catalog. Check your connection and try again.
      </Typography>
      <Button
        variant="outlined"
        startIcon={<RefreshRoundedIcon />}
        onClick={() => window.location.reload()}
        sx={{ mt: 1 }}
      >
        Try again
      </Button>
    </Box>
  );
}
