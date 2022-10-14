// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';
import { Img } from '@chakra-ui/react';
export default function DrawerExample() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Img src={require('../assets/sorvete.jpg')}></Img>
        </SwiperSlide>
        <SwiperSlide>
          <Img src={require('../assets/sorvete1.jpg')}></Img>
        </SwiperSlide>
        <SwiperSlide>
          <Img src={require('../assets/sorvete2.jpg')}></Img>
        </SwiperSlide>
        <SwiperSlide>
          <Img src={require('../assets/sorvete3.jpg')}></Img>
        </SwiperSlide>
        <SwiperSlide>
          <Img src={require('../assets/sorvete1.png')}></Img>
        </SwiperSlide>
        <SwiperSlide>
          <Img src={require('../assets/sorvete2.png')}></Img>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
