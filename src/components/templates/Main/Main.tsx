import Navbar from "@Organisms/Navbar";
import { Container } from "@mui/material"
import theme from "@Styles/theme";

type Props = {
  children?: React.ReactNode
}

export default function Main({ children }: Props) {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        {children}
      </Container>
    </>
  )
}