import React, { ReactElement } from 'react';
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";

type CarouselProps = {
  slides: Array<ReactElement>
}

const Carousel = ({
  slides
}: CarouselProps) => (
  <Swiper
    slidesPerView={"auto"}
    centeredSlides={true}
    spaceBetween={30}
    pagination={{
			clickable: true,
      renderBullet: (index, className) => {
        return '<span class="' + className + ' custom-pagination-bullet"></span>';
      },
    }}
    modules={[Pagination]}
    className="mySwiper"
  >
    {slides.map(slide => (
      <SwiperSlide>
        {slide}
      </SwiperSlide>
    ))}
  </Swiper>
);

export default Carousel;