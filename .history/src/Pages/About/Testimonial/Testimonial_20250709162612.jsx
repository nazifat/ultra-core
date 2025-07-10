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
                    <SwiperSlide className="h-full">
                        <div className="h-full flex">
                            <TestimonialCard

                                name="John Daison"
                                img="https://i.ibb.co/4ZyDC3nZ/TES356.jpg"
                                text="Their team delivered exactly what we needed on time and bug-free. Truly dependable partners!"
                            >


                            </TestimonialCard>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="h-full">
                        <div className="h-full flex">
                        <TestimonialCard
                            name="Smith Jan"
                            img="https://i.ibb.co/Z1bJTVdn/TECW0022.jpg"
                            text="Amazing experience! Amazing experience!  Amazing experience!  The UI/UX design was modern, clean, and highly intuitive."
                        >
                        </TestimonialCard>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="h-full">
                        <div className="h-full flex">
                        <TestimonialCard
                            name="Arnold History"
                            img="https://i.ibb.co/4ZyDC3nZ/TES356.jpg"
                            text="They transformed our outdated system into a fast, scalable platform. Great communication too!"
                        >
                        </TestimonialCard>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="h-full">
                        <div className="h-full flex">
                        <TestimonialCard
                            name="Mike Polar"
                            img="https://i.ibb.co/Z1bJTVdn/TECW0022.jpg"
                            text="Top-notch support and attention to detail. We felt heard throughout the entire project."
                        >
                        </TestimonialCard>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <TestimonialCard
                            name="Arnold History"
                            img="https://i.ibb.co/4ZyDC3nZ/TES356.jpg"
                            text="They transformed our outdated system into a fast, scalable platform. Great communication too!"
                        >
                        </TestimonialCard>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <TestimonialCard
                            name="Mike Polar"
                            img="https://i.ibb.co/Z1bJTVdn/TECW0022.jpg"
                            text="Top-notch support and attention to detail. We felt heard throughout the entire project."
                        >
                        </TestimonialCard>
                    </SwiperSlide>

                </Swiper>
            </div>

        </div>
    );
};

export default Testimonial;