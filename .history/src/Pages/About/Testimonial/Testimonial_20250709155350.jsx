import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import AboutHeader from '../AboutHeader/AboutHeader';


const Testimonial = () => {
    return (
        <div>
            <div className='text-center'>
                <AboutHeader header="Testimonial" subheader="100+ satisfied clients worldwide"></AboutHeader>

            </div>

        </div>
    );
};

export default Testimonial;