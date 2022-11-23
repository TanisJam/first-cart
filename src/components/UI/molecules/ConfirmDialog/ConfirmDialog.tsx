import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { sxDialog } from "./ConfirmDialog.styles";

type Props = {
  title: string;
  description: string;
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export default function ConfirmDialog({
  title,
  description,
  open,
  onClose,
  onConfirm,
}: Props) {
  return (
    <Dialog open={open} onClose={onClose} sx={sxDialog}>
      <DialogTitle>{title}</DialogTitle>
      <p>{description}</p>
      <Box>
        <Button variant="contained" color="info" onClick={onClose}>Cancel</Button>
        <Button variant="contained" color="success" onClick={onConfirm}>Confirm</Button>
      </Box>
    </Dialog>
  );
}
