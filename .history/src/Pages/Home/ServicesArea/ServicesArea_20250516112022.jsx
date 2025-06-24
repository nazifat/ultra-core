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
        <div>
            <h2 className='text-2xl text-gray-900 my-2 font-bold'>Services we offer</h2>
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

                    <div className="card bg-gray-400 w-96 shadow-sm">
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Card Title
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Fashion</div>
                                <div className="badge badge-outline">Products</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>


        </div>
    );
};

export default ServicesArea;