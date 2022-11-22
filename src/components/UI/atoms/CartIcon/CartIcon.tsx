import { useMemo } from 'react';
import { useAppSelector } from '@Store/hooks';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import { sxCartIconBadge, sxCartIcon } from './CartIcon.styles';

type Props = {
  onClick: () => void,
}
export default function CartIcon({ onClick }: Props) {
  const { items } = useAppSelector((state) => state.cart);
  const totalItems = useMemo(() => {
    return items.reduce((acc, item) => acc + item.quantity, 0);
  }, [items]);

  return (
    <Badge badgeContent={totalItems} color="primary"
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      sx={sxCartIconBadge}
    >
      <ShoppingCartOutlinedIcon
        sx={sxCartIcon}
        onClick={onClick}
      />
    </Badge>
  )
}