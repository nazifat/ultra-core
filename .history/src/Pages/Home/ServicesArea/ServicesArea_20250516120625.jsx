// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from '../../../assets/images/aiml.png'
import slide2 from '../../../assets/images/uiux.png'
import slide3 from '../../../assets/images/cyber.png'
import slide4 from '../../../assets/images/data.png'
import slide5 from '../../../assets/images/cloud.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const ServicesArea = () => {
    return (
        <div className='bg-[#F9F9FF] w-full lg:p-20'>
            <h2 className='text-2xl text-[#2D3748] mb-10 font-bold'>Services we offer</h2>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>

                    <div className="card bg-[#fff] w-96 shadow-sm">
                        <figure className='justify-left'>
                            <img
                            className='h-[32px] w-[32px]'
                                src={slide1}
                                alt="AI" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold text-gray-800">
                            AI & Machine Learning
                            </h2>
                            <ol className='text-left text-[#718096] list-decimal list-inside  '>
                                <li>Natural Language Processing (NLP)</li>
                                <li>Computer Vision & OCR</li>
                                <li>Predictive Analytics & Forecasting</li>
                                <li>AI Model Integration & Deployment</li>
                            </ol>
                            
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>


        </div>
    );
};

export default ServicesArea;