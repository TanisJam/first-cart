import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import DialogContentText from "@mui/material/DialogContentText";
import Button from "@mui/material/Button";

type Props = {
  title: string;
  description: string;
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  confirmLabel?: string;
  cancelLabel?: string;
};

export default function ConfirmDialog({
  title,
  description,
  open,
  onClose,
  onConfirm,
  confirmLabel = "Remove",
  cancelLabel = "Keep",
}: Props) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{ sx: { p: 1 } }}
    >
      <DialogTitle sx={{ pb: 1, fontSize: "1.0625rem", fontWeight: 600 }}>
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ color: "text.secondary", fontSize: "0.9375rem" }}>
          {description}
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2, gap: 1 }}>
        <Button onClick={onClose} variant="outlined">
          {cancelLabel}
        </Button>
        <Button
          onClick={onConfirm}
          variant="contained"
          sx={{
            backgroundColor: "error.main",
            "&:hover": { backgroundColor: "error.dark" },
          }}
        >
          {confirmLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
