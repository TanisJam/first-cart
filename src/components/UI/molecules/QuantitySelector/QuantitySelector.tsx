import { useState } from "react"
import Label from "@Atoms/Label"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import ButtonGroup from "@mui/material/ButtonGroup"
import Box from "@mui/material/Box"
import { sxQuantitySelector } from "./QuantitySelector.styles"

type QuantitySelectorProps = {
  title?: string,
  quantity: number,
  setQuantity: (quantity: number) => void,
}


export default function QuantitySelector({ title, quantity, setQuantity }: QuantitySelectorProps) {
  const handleIncrement = () => {
    setQuantity(quantity + 1)
  }
  const handleDecrement = () => {
    if (quantity <= 1) return
    setQuantity(quantity - 1)
  }

  return (
    <Box sx={{width: 120}}>
      {title && <Label>{title}</Label>}
      <ButtonGroup
        disableElevation
        variant="contained"
        aria-label="Disabled elevation buttons"
        color="secondary"
        sx={sxQuantitySelector}
      >
        <Button onClick={handleDecrement}>-</Button>
        <Typography variant="body1" color="text.secondary">
          {quantity}
        </Typography>
        <Button onClick={handleIncrement}>+</Button>
      </ButtonGroup>
    </Box>
  )
}