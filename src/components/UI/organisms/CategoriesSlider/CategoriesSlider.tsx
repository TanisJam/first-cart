import CategoryItem from '@Molecules/CategoryItem';
import Box from '@mui/material/Box';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';

import { sxCategoriesSlider } from './CategoriesSlider.styles';


type Props = {}

export default function CategoriesSlider({ }: Props) {

  return (
    <Box sx={sxCategoriesSlider}>

      <Swiper
        slidesPerView="auto"
        spaceBetween={30}
        // loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Navigation]}
      >
        <SwiperSlide><CategoryItem active /></SwiperSlide>
        <SwiperSlide><CategoryItem /></SwiperSlide>
        <SwiperSlide><CategoryItem /></SwiperSlide>
        <SwiperSlide><CategoryItem /></SwiperSlide>
      </Swiper>
    </Box>
  )
}