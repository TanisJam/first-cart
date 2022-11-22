import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { sxCartIcon } from './CartIcon.styles';

type Props = {
  onClick: () => void,
}

export default function CartIcon({ onClick }: Props) {
  return (
    <ShoppingCartOutlinedIcon
      sx={sxCartIcon}
      onClick={onClick}
    />
  )
}