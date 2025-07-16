// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

const servicesData = [
    {
        title: 'Staff Augmentation',
        image: 'https://i.ibb.co.com/Z6r8QtGn/aiml.png',
        points: [
            'Looking for top-tier IT staff augmentation services? We offer comprehensive solutions and highly skilled personnel to help you grow and strengthen your team.',
        ],
    },
    {
        title: 'Digital Product Engineering',
        image: 'https://i.ibb.co.com/8Lm3b3QH/data.png',
        points: [
            'Design, develop, and deploy robust software platforms, mobile apps, and enterprise systems tailored to modern business needs.',
        ],
    },
    {
        title: 'Cloud & DevOps',
        image: 'https://i.ibb.co.com/BK6pc359/uiux.png',

        points: [
            'Streamline your infrastructure, reduce downtime, and deploy with confidence using modern cloud-native architectures and DevOps practices.',
        ],
    },
    {
        title: 'UI/UX Design',
        image: 'https://i.ibb.co.com/cKqS9P1P/cyber.png',
        points: [
            'Human-centered design to deliver intuitive, engaging digital experiences that delight users and meet business goals.',
        ],
    },
    {
        title: 'AI & Data Engineering',
        image: 'https://i.ibb.co.com/zHbNkDRR/ADM.png',
        points: [
            'From predictive analytics to custom AI models — we help businesses unlock the power of their data.',
        ],
    },
    {
        title: 'Custom Software Development',
        image: 'https://i.ibb.co.com/4ZFPnfhK/cloud.png',
        points: [
            "Whether it's B2B platforms, internal tools, or customer-facing portals, we build scalable and secure custom software.",
        ],
    },
    {
        title: 'Emerging Tech (IoT, Blockchain, AR/VR)',
        image: 'https://i.ibb.co.com/Z6r8QtGn/aiml.png',
        points: [
            'Experiment and innovate with the latest technology to future-proof your business.',
        ],
    },
    {
        title: 'Digital Survey',
        image: 'https://i.ibb.co.com/BK6pc359/uiux.png',
        points: [
            'Collect actionable insights through tailored digital surveys to enhance customer experience and drive informed decision-making.',
        ],
    },
];

const ServicesArea = () => {
    return (
        <div className="bg-[#F9F9FF] w-full lg:p-20 lg:pt-10 pt-5">
            <h2 className="lg:text-3xl text-xl text-[#2D3748] lg:mb-10 text-center font-bold">
                Services we offer
            </h2>

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{ clickable: true }}
                modules={[FreeMode, Pagination]}
                breakpoints={{
                    1024: { slidesPerView: 3 },
                    768: { slidesPerView: 2 },
                    0: {
                        slidesPerView: 1,
                        centeredSlides: true,
                        centeredSlidesBounds: true,
                    },
                }}
                className="mySwiper"
            >
                {servicesData.map((service, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="service-card bg-white shadow-sm rounded-lg p-4">
                            <div>
                                <img
                                    className="h-[52px] w-[52px] border border-[#DE9EBA] rounded-lg p-2 object-contain"
                                    src={service.image}
                                    alt={service.title}
                                />
                            </div>
                            <div>
                                <h2 className="card-title font-semibold text-gray-700 text-left mt-2">
                                    {service.title}
                                </h2>
                                <ul className="text-left text-[#718096] list-inside mt-2">
                                    {service.points.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ServicesArea;
