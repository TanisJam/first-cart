import Typography from "@mui/material/Typography"
import { sxLabel } from "./Label.styles"

type Props = {
  children: React.ReactNode
}

export default function Label({ children }: Props) {
  return (
    <Typography component="h3" sx={sxLabel} >
      {children}
    </Typography>
  )
}