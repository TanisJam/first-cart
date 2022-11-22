import { useEffect } from 'react';
import { useAppDispatch } from '@Store/hooks';
import { setCategories } from "@Store/features/productsFilter/productsFilterSlice";
import { useGetProductsQuery } from '@Store/services/products';
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CategoriesSlider from '@Organisms/CategoriesSlider';
import { sxAccordion, sxAccordionSummary } from './Categories.styles'

export default function Categories() {
  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useGetProductsQuery();

  useEffect(() => {
    if (data) {
      const categories = data.map((product) => product.category);
      const uniqueCategories = [...new Set(categories)];
      dispatch(setCategories(uniqueCategories));
    }
  }, [data]);

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