import Typography from "@mui/material/Typography";

type Props = {
  children: React.ReactNode;
};

export default function Label({ children }: Props) {
  return (
    <Typography
      component="span"
      variant="overline"
      sx={{
        display: "block",
        color: "text.secondary",
        mb: 0.5,
      }}
    >
      {children}
    </Typography>
  );
}
