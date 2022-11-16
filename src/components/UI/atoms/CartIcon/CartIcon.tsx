import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


export default function CartIcon() {
  return (
    <ShoppingCartOutlinedIcon
      sx={{
        backgroundColor: theme => theme.palette.secondary.main,
        color: theme => theme.palette.secondary.contrastText,
        borderRadius: '50%',
        padding: '0.5rem',
        width: '2.5rem',
        height: '2.5rem',
      }}
    />
  )
}