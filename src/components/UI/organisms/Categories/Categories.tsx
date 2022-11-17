import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CategoriesSlider from '@Organisms/CategoriesSlider';



import { sxAccordion, sxAccordionSummary } from './Categories.styles'


type Props = {}

export default function Categories({ }: Props) {

  return (
    <Accordion sx={sxAccordion} >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={sxAccordionSummary}
      >
        <Typography>CATEGORIES</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <CategoriesSlider />
      </AccordionDetails>
    </Accordion >
  )
}