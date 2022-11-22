import { useGetProductsQuery } from '@Store/services/products';
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CategoriesSlider from '@Organisms/CategoriesSlider';

import { sxAccordion, sxAccordionSummary } from './Categories.styles'

export default function Categories() {

  const { data, isLoading, error } = useGetProductsQuery();

  if (isLoading || error) return null;

  return (
    <Accordion sx={sxAccordion} >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={sxAccordionSummary}
      >
        <Typography variant='body2' >CATEGORIES</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <CategoriesSlider products={data || []} />
      </AccordionDetails>
    </Accordion >
  )
}