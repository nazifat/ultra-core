import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import AboutHeader from '../AboutHeader/AboutHeader';
import TestimonialCard from './TestimonialCard';


const Testimonial = () => {
    return (
        <div>
            <div className='text-center'>
                <AboutHeader header="Testimonial" subheader="100+ satisfied clients worldwide"></AboutHeader>

            </div>
            <div className='m-10 p-5'>
                <Swiper
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="mySwiper"
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    <SwiperSlide className=''>Slide 1
                        <TestimonialCard
                            name="John Daison"
                            img="https://i.ibb.co/4ZyDC3nZ/TES356.jpg"
                            text="Their team delivered exactly what we needed on time and bug-free. Truly dependable partners!"
                        >
                        </TestimonialCard>
                    </SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
            </div>

        </div>
    );
};

export default Testimonial;