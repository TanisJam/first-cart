import { useMemo } from 'react';
import CategoryItem from '@Molecules/CategoryItem';
import Box from '@mui/material/Box';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import { sxCategoriesSlider } from './CategoriesSlider.styles';
import { Product } from '@Types/product';

type Props = {
  products: Product[];
};

export default function CategoriesSlider({ products }: Props) {
  // extract unique categories and images for them from product list
  const categories = useMemo(() => {
    const categories = products.reduce((acc, product) => {
      const { category, image } = product;
      if (acc[category]) {
        acc[category].push(image);
      } else {
        acc[category] = [image];
      }
      return acc;
    }, {} as { [key: string]: string[] });
    return categories;
  }, [products]);

  return (
    <Box sx={sxCategoriesSlider}>
      <Swiper
        slidesPerView="auto"
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
      >
        {Object.keys(categories).map((category) => (
          <SwiperSlide key={category}>
            <CategoryItem name={category} images={categories[category]} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}